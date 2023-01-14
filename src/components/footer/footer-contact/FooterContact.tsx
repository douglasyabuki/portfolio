// Interface
import { IContact } from '../../../interfaces/IContact';

// Props destructuring
interface Props {
  list: IContact[];
}

// Footer contact main function
export default function FooterContact({ list }: Props) {

  // Returns contact info to Footer.tsx
  return (
    <div className="container w-[250px]">
      <h1 className="text-base font-semibold text-not-so-white text-opacity-80 lg:text-xl">
        Get in touch
      </h1>
      {list.map((item) => (
        <div className="text-left text-sm lg:text-lg">
          <a
            href={item.href}
            key={item.id}
            className="text-not-so-white text-opacity-50 transition-all duration-200 ease-in-out hover:text-opacity-80 hover:underline"
          >
            {item.content}
          </a>
        </div>
      ))}
    </div>
  );
}