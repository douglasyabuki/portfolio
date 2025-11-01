import type { DeviconName } from '@/libs/devicon/devicon';

export interface ProjectItem {
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
  gitUrl: string;
  techs: DeviconName[];
}
export const projectList: ProjectItem[] = [
  {
    name: 'Sudoku Solver',
    description:
      'Vite + React + TypeScript sudoku solver app. Has a step by step option that allows you to see the brute-force solution in action.',
    imageSrc: '/proj-sudoku.jpg',
    imageAlt: 'Screenshot of my sudoku-solver project',
    url: 'https://douglas-yabuki-sudoku-solver.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/sudoku-solver',
    techs: ['html5', 'tailwindcss', 'typescript', 'react', 'vitejs'],
  },
  {
    name: 'Brevly',
    description:
      'A full-stack URL shortener app with a PostgreSQL database hosted on Render. The backend uses Node.js, Drizzle, and Fastify, and is deployed on Render. The frontend is built with Vite, React, and TypeScript, and is deployed on Vercel.',
    imageSrc: '/proj-brevly.jpg',
    imageAlt: 'Screenshot of my brevly project',
    url: 'https://douglas-yabuki-brevly.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/brevly/',
    techs: [
      'html5',
      'tailwindcss',
      'typescript',
      'react',
      'vitejs',
      'nodejs',
      'postgresql',
      'docker',
    ],
  },
  {
    name: '3D Tic-Tac-Toe',
    description: 'A 3D tic-tac-toe game created with Solid.js.',
    imageSrc: '/proj-3d-tic-tac-toe.jpg',
    imageAlt: 'Screenshot of my 3D tic-tac-toe project',
    url: 'https://solid-3d-tic-tac-toe.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/solid-3d-tic-tac-toe',
    techs: ['html5', 'tailwindcss', 'typescript', 'solidjs', 'vitejs'],
  },
  {
    name: 'YujInsights',
    description:
      'A learning hub still under development. Vite (React + TypeScript) and Vercel PostgreSQL as database.',
    imageSrc: '/proj-yujinsights.jpg',
    imageAlt: 'Screenshot of my YujInsights project',
    url: 'https://yujinsights.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/yujinsights',
    techs: ['html5', 'tailwindcss', 'typescript', 'react', 'vitejs', 'postgresql'],
  },
  {
    name: 'Rest Countries API',
    description:
      'Front End Mentor challenge built in Next (AppRouter) and deployed on Vercel. Includes mock API response. There is a hidden game in this project.',
    imageSrc: '/proj-countries.jpg',
    imageAlt: 'Screenshot of my Rest Countries API project',
    url: 'https://rest-countries-api-douglasyabuki.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/rest-countries-api',
    techs: ['html5', 'tailwindcss', 'typescript', 'react', 'nextjs'],
  },
  {
    name: 'Portfolio',
    description:
      'A portfolio website made with React + TypeScript + tailwindcss made with Vite and deployed on Vercel',
    imageSrc: '/proj-portfolio.jpg',
    imageAlt: 'Screenshot of my portfolio project',
    url: 'https://portfolio-douglasyabuki.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/portfolio',
    techs: ['html5', 'tailwindcss', 'typescript', 'react', 'vitejs'],
  },
  {
    name: 'Netflix Clone',
    description:
      "Legally cloning Netflix's website with React + TypeScript + tailwindcss on Vite. Consuming API from themoviedb.org.",
    imageSrc: '/proj-netflix.jpg',
    imageAlt: 'Screenshot of my netflix cloning project',
    url: 'https://netflix-clone-pq9zd92oa-douglasyabuki.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/netflix-clone',
    techs: ['html5', 'tailwindcss', 'typescript', 'react', 'vitejs'],
  },
  {
    name: 'Memory Game',
    description: 'A React + TypeScript memory game using Vite.',
    imageSrc: '/proj-memory.jpg',
    imageAlt: 'Screenshot of my memory game project',
    url: 'https://react-memory-game-douglasyabuki.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/react-memory-game',
    techs: ['html5', 'css3', 'typescript', 'react', 'vitejs'],
  },
  {
    name: 'Tic tac toe',
    description: 'A simple React + TypeScript Tic-Tac-Toe game using Vite.',
    imageSrc: '/proj-tic.jpg',
    imageAlt: 'Screenshot of my Tic Tac Toe project',
    url: 'https://react-tic-tac-toe-douglasyabuki.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/react-tic-tac-toe',
    techs: ['html5', 'css3', 'typescript', 'react', 'vitejs'],
  },
  {
    name: 'Todo list',
    description: 'The classic todo list using React + TypeScript and Vite.',
    imageSrc: '/proj-todo.jpg',
    imageAlt: 'Screenshot of my todo list project',
    url: 'https://todo-list-douglasyabuki.vercel.app/',
    gitUrl: 'https://github.com/douglasyabuki/todo-list',
    techs: ['html5', 'css3', 'typescript', 'react', 'vitejs'],
  },
  {
    name: 'Rock Paper Scissors Lizard & Spock',
    description: 'Game suggested by Sheldon (Big Bang Theory) built in Angular.',
    imageSrc: '/proj-rock.jpg',
    imageAlt: 'Screenshot of my memory game project',
    url: 'https://douglasyabuki.github.io/rock-paper-scissors/',
    gitUrl: 'https://github.com/douglasyabuki/rock-paper-scissors',
    techs: ['html5', 'css3', 'typescript', 'angular'],
  },
];
