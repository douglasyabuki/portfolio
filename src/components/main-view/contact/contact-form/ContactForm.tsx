import { TextArea } from '@/components/ui/input/text-area/TextArea';
import { TextInput } from '@/components/ui/input/text-input/TextInput';
import { Label } from '@/components/ui/label/Label';
import { useForm } from '@/hooks/use-form';
import { sendEmail } from '@/libs/emailjs/emailjs';
import { validateEmail, validateFullName, validateMessage } from '@/utils/form-validators';
import { SubmitButton } from './submit-button/SubmitButton';

export const ContactForm = () => {
  const { values, errors, handleChange, handleSubmit, onValidate } = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validators: {
      name: validateFullName,
      email: validateEmail,
      message: validateMessage,
    },
    onSubmit: () => {
      sendEmail({ user_name: values.name, user_email: values.email, message: values.message });
    },
  });

  return (
    <div id="contact-form" className="subsection">
      <h1 className="text-center! text-3xl font-bold duration-150 md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
        Leave a message
      </h1>
      <div className="flex w-full items-center justify-center py-20 lg:py-32">
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="bg-background-primary flex w-min min-w-[18.75rem] flex-col gap-4 rounded-xl px-4 py-6 shadow-md shadow-black/10 duration-150 hover:shadow-xl"
        >
          <Label label="Full name" error={errors.name}>
            <TextInput
              id="name"
              value={values.name}
              hasError={!!errors.name}
              onChange={(e) => handleChange('name', e.target.value)}
              onBlur={() => onValidate('name')}
            />
          </Label>
          <Label label="E-mail" error={errors.email}>
            <TextInput
              id="email"
              value={values.email}
              hasError={!!errors.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => onValidate('email')}
            />
          </Label>
          <Label label="Message" error={errors.message}>
            <TextArea
              id="message"
              value={values.message}
              hasError={!!errors.message}
              onChange={(e) => handleChange('message', e.target.value)}
              onBlur={() => onValidate('message')}
            />
          </Label>
          <SubmitButton
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            disabled={
              Object.values(values).some((v) => !v.length) || Object.values(errors).some(Boolean)
            }
          />
        </form>
      </div>
    </div>
  );
};
