import { AnchorButton } from '@/components/ui/buttons/anchor-button/AnchorButton';
import { Icons } from '@/icons/Icons';
import { WelcomeAnimation } from './welcome-animation/WelcomeAnimation';

const title = 'Recruit a reliable Developer to your team';
const content =
  'A professional recognized for his affability, adaptivity and desire for knowledge. May this Portfolio be able to demonstrate his determination and passion as a Developer.';

export const Home = () => {
  return (
    <section id="home" className="bg-section-primary section">
      <div className="bg-container-primary shadow-translucid-black flex flex-col items-center justify-start rounded-2xl px-4 py-8 sm:px-7 sm:py-7 md:px-8 md:py-8 lg:items-start lg:px-10 lg:py-10 xl:px-16">
        <WelcomeAnimation />
        <div className="flex flex-col items-center justify-center text-center lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-4 py-4 lg:text-left">
            <h1 className="mt-5 text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-6xl">
              {title}
            </h1>
            <h2 className="xs:py-8 py-4 text-xl opacity-80 md:text-2xl xl:py-12 2xl:py-16 2xl:text-4xl">
              {content}
            </h2>
            <div className="flex flex-col items-center justify-start gap-4 md:my-12 md:flex-row md:justify-center md:gap-8 lg:justify-start lg:gap-4">
              <AnchorButton Icon={<Icons.Envelope />} variant="primary" href="#contact">
                Contact
              </AnchorButton>
              <AnchorButton Icon={<Icons.CircleInfo />} variant="secondary" href="#about">
                Learn more
              </AnchorButton>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/coding.jpg"
              alt="photo from unsplash arnold-francisca-f77Bh3inUpE-"
              className="contain w-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
