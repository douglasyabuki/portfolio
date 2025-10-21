import { ContactCards } from './contact-cards/ContactCards';
import { ContactForm } from './contact-form/ContactForm';

export const Contact = () => {
  return (
    <section id="contact" className="bg-section-primary section">
      <ContactCards />
      <ContactForm />
    </section>
  );
};
