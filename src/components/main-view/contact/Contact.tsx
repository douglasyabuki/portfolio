// Components
import ContactForm from "./contact-form/ContactForm";

// Contact main function
export default function Contact () {

  // Returns the whole Contact component to Main View
  return (
    <div id='#contact' className="w-auto h-auto py-16 px-4 sm:px-7 md:px-8 lg:px-10 bg-background-black">
      <ContactForm></ContactForm>
    </div>
  );
}
