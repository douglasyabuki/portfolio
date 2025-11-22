import { contactList } from '@/data/contacts';

export const Contact = () => {
  return (
    <div className="w-[15.625rem]">
      <h1 className="text-white-primary text-base font-semibold opacity-80 lg:text-xl">
        Get in touch
      </h1>
      {contactList
        .filter(({ mode }) => mode !== 'form')
        .map(({ content, href, name }) => (
          <div key={`footer-${name}`} className="text-left text-sm lg:text-lg">
            <a
              href={href}
              className="text-white-primary opacity-50 transition-all duration-150 ease-in-out hover:underline hover:opacity-80"
            >
              {content}
            </a>
          </div>
        ))}
    </div>
  );
};
