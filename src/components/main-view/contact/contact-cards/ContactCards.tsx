import { contactList } from '@/data/contacts';
import { ContactCard } from './contact-card/ContactCard';

export const ContactCards = () => {
  return (
    <div className="subsection">
      <h1 className="w-auto text-center text-3xl font-bold md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
        Get in touch
      </h1>
      <div className="mx-auto flex w-full max-w-[120rem] flex-col items-center justify-between gap-12 py-20 lg:grid lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div className="flex flex-col gap-8">
          {contactList.map(({ content, href, mode, name, newPage, routing, iconName }) => (
            <ContactCard
              key={`contact-card-${mode}`}
              content={content}
              href={href}
              title={name}
              newPage={newPage}
              routing={routing}
              iconName={iconName}
            />
          ))}
        </div>
        <div className="relative flex">
          <img
            className="cover rounded-xl shadow-sm shadow-black/10 duration-150 hover:scale-105"
            src="/contact.jpg"
            alt="Photo by Gilles Lambert on Unsplash"
          />
        </div>
      </div>
    </div>
  );
};
