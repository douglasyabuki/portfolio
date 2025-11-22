import { useOnMount } from '@/hooks/use-on-mount';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  size: number;
  shouldAssemble: boolean;
}

interface ParticlesOptions {
  brickWidth: number;
  brickHeight: number;
  brickGap: number;
  // Maximum number of rows to display (0 for full screen)
  maxRows: number;
  // Gap between floating particles and the brick grid
  zoningBuffer: number;
}

interface ParticlesBackground {
  className?: string;
  particlesOptions?: ParticlesOptions;
}

export const ParticlesBackground = ({
  className,
  particlesOptions = {
    brickWidth: 240,
    brickHeight: 50,
    brickGap: 8,
    maxRows: 6,
    zoningBuffer: 5,
  },
}: ParticlesBackground) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { brickWidth, brickHeight, brickGap, maxRows, zoningBuffer } = particlesOptions;

  useOnMount(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let isVisible = true;

    // Configuration

    let mouseX = -1000; // Mouse X position

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const addParticle = (baseX: number, baseY: number, shouldAssemble: boolean) => {
      particles.push({
        x: Math.random() * canvas.width, // Start at random position
        y: Math.random() * canvas.height,
        baseX,
        baseY,
        vx: (Math.random() - 0.5) * 1, // Random initial velocity
        vy: (Math.random() - 0.5) * 1,
        size: 1.5,
        shouldAssemble,
      });
    };

    const createParticles = () => {
      particles = [];

      const colWidth = brickWidth + brickGap;
      const rowHeight = brickHeight + brickGap;

      // Add extra rows/cols to cover screen including stagger offset
      const cols = Math.ceil(canvas.width / colWidth) + 2;
      // Always generate enough rows to cover the full screen
      const rows = Math.ceil(canvas.height / rowHeight) + 2;

      const startX = -colWidth; // Start off-screen
      // Align to bottom with some padding
      const totalGridHeight = rows * rowHeight;
      const startY = canvas.height - totalGridHeight + 20;

      // Helper to create a noisy line of particles
      const createNoisyLine = (x1: number, y1: number, x2: number, y2: number) => {
        const length = Math.hypot(x2 - x1, y2 - y1);
        // Increase density for better volume
        const steps = length / 2;
        const spread = 4; // How "fuzzy" the line is

        for (let i = 0; i <= steps; i++) {
          const t = i / steps;
          const cx = x1 + (x2 - x1) * t;
          const cy = y1 + (y2 - y1) * t;

          // Add noise to position
          const nx = cx + (Math.random() - 0.5) * spread;
          const ny = cy + (Math.random() - 0.5) * spread;

          // Occasionally add extra particles near the line for more volume
          if (Math.random() > 0.7) {
            const ex = cx + (Math.random() - 0.5) * (spread * 3);
            const ey = cy + (Math.random() - 0.5) * (spread * 3);
            addParticle(ex, ey, true);
          }

          addParticle(nx, ny, true);
        }
      };

      // 1. Generate particles ONLY for the assembling rows
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let brickX = startX + i * colWidth;
          const brickY = startY + j * rowHeight;

          // Determine if this row should assemble
          // We want the BOTTOM maxRows to assemble
          const shouldAssemble = (maxRows as number) === 0 || j >= rows - maxRows;

          if (shouldAssemble) {
            // Stagger every other row
            if (j % 2 !== 0) {
              brickX += Math.floor(colWidth / 2);
            }

            // Create noisy lines along the perimeter
            // Top
            createNoisyLine(brickX, brickY, brickX + brickWidth, brickY);
            // Bottom
            createNoisyLine(
              brickX,
              brickY + brickHeight,
              brickX + brickWidth,
              brickY + brickHeight,
            );
            // Left
            createNoisyLine(brickX, brickY, brickX, brickY + brickHeight);
            // Right
            createNoisyLine(brickX + brickWidth, brickY, brickX + brickWidth, brickY + brickHeight);
          }
        }
      }

      // 2. Generate extra floating particles (approx 16% of brick particles)
      const brickParticleCount = particles.length;
      const extraParticlesCount = Math.floor(brickParticleCount / 6);

      for (let i = 0; i < extraParticlesCount; i++) {
        addParticle(0, 0, false); // baseX/Y don't matter for these
      }
    };

    const drawParticles = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isHovering = mouseX > -100; // Check if mouse is active

      // Physics constants
      const friction = isHovering ? 0.9 : 0.99; // More friction when assembling
      const ease = 0.1; // Spring strength to base

      // Calculate the top boundary of the brick grid
      const rowHeight = brickHeight + brickGap;
      const rows = Math.ceil(canvas.height / rowHeight) + 2;
      const totalGridHeight = rows * rowHeight;
      const gridStartY = canvas.height - totalGridHeight + 20;
      // The actual visual top of the assembled bricks (approximate)
      // We use the row index logic: j >= rows - maxRows
      // So the first assembling row is at index: rows - maxRows
      const firstAssemblingRowIndex = rows - maxRows;
      const visualGridTopY = gridStartY + firstAssemblingRowIndex * rowHeight;

      particles.forEach((p) => {
        if (isHovering && p.shouldAssemble) {
          // ASSEMBLE MODE: Spring force to base position + Jitter
          const dxBase = p.baseX - p.x;
          const dyBase = p.baseY - p.y;

          p.vx += dxBase * ease;
          p.vy += dyBase * ease;

          // Add random jitter to keep them alive
          const jitter = 0.5;
          p.vx += (Math.random() - 0.5) * jitter;
          p.vy += (Math.random() - 0.5) * jitter;
        } else {
          // FLOAT MODE: Random drift
          p.vx += (Math.random() - 0.5) * 0.1; // Increased drift
          p.vy += (Math.random() - 0.5) * 0.1;

          // Limit max speed
          const maxSpeed = 1.5;
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed;
            p.vy = (p.vy / speed) * maxSpeed;
          }

          // ZONING: If hovering, confine extra particles to the area ABOVE the grid
          if (isHovering && !p.shouldAssemble) {
            // Push up if they go below the visual grid top
            // Add a buffer so they don't touch the bricks
            const limitY = visualGridTopY - zoningBuffer;

            if (p.y > limitY) {
              // Apply a randomized force to scatter them
              const pushStrength = 0.5;
              p.vy -= pushStrength + Math.random() * 0.5; // Push up with variation
              p.vx += (Math.random() - 0.5) * 1; // Scatter horizontally
            }
          }
        }

        // Apply friction
        p.vx *= friction;
        p.vy *= friction;

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        if (!isHovering) {
          // Bounce off edges only in float mode
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    // Debounce resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        createParticles();
      }, 200);
    };

    // Intersection Observer to pause animation when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          drawParticles(); // Resume animation
        } else {
          cancelAnimationFrame(animationFrameId); // Stop animation
        }
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    resizeCanvas();
    createParticles();
    drawParticles();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      // Check if mouse is within canvas bounds
      if (mx >= 0 && mx <= canvas.width && my >= 0 && my <= canvas.height) {
        mouseX = mx;
      } else {
        mouseX = -1000;
      }
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  });

  return (
    <canvas
      ref={canvasRef}
      className={twMerge(
        'pointer-events-none absolute inset-0 z-0 h-full w-full opacity-100',
        className,
      )}
    />
  );
};
