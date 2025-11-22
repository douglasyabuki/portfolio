import { ContactCards } from './contact-cards/ContactCards';
import { ContactForm } from './contact-form/ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className="section container-max">
      <div className="mb-16">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Get in Touch</h2>
        <p className="max-w-2xl text-lg text-text-secondary">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </div>
      <div className="flex flex-col gap-24">
        <ContactCards />
        <ContactForm />
      </div>
    </section>
  );
};
