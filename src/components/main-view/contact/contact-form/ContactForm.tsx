import { TextButton } from '@/components/ui/buttons/text-button/TextButton';
import { Collapsible } from '@/components/ui/collapsible/Collapsible';
import { TextArea } from '@/components/ui/input/text-area/TextArea';
import { TextInput } from '@/components/ui/input/text-input/TextInput';
import { Label } from '@/components/ui/label/Label';
import { useForm } from '@/hooks/use-form';
import { Icons } from '@/icons/Icons';
import { sendEmail } from '@/libs/emailjs/emailjs';
import { validateEmail, validateFullName, validateMessage } from '@/utils/form-validators';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { SubmitButton } from './submit-button/SubmitButton';

type MessageStatus = 'not sent' | 'sending' | 'sent' | 'error';

export const ContactForm = () => {
  const [messageStatus, setMessageStatus] = useState<MessageStatus>('not sent');
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
      setMessageStatus('sending');
      sendEmail({
        values: { user_name: values.name, user_email: values.email, message: values.message },
        onSuccess: () => {
          setMessageStatus('sent');
        },
        onError: (err) => {
          console.log({ err });
          setMessageStatus('error');
        },
      });
    },
  });

  return (
    <div id="contact-form" className="subsection">
      <h1 className="text-center! text-3xl font-bold duration-150 md:text-4xl lg:text-left xl:text-5xl 2xl:text-6xl">
        Leave a message
      </h1>
      <div className="relative flex w-full items-start justify-center overflow-hidden py-20 lg:py-32">
        {/* Error message */}
        <Collapsible isCollapsed={messageStatus !== 'error'} className="absolute duration-300">
          <span className="flex w-[18.75rem] flex-col items-center gap-8 rounded-lg border-2 border-dashed border-red-600/50 px-4 py-12 text-center duration-300 ease-out">
            <h3 className="text-semibold text-3xl xl:text-4xl">Error sending message</h3>
            <span className="size-24 text-red-600">
              <Icons.CircleExclamation className="clay-icon text-red-600" />
            </span>
            <TextButton onClick={() => setMessageStatus('not sent')} variant="secondary">
              Try again later
            </TextButton>
          </span>
        </Collapsible>

        {/* Success message */}
        <Collapsible isCollapsed={messageStatus !== 'sent'} className="absolute duration-300">
          <span className="flex w-[18.75rem] flex-col items-center gap-8 rounded-lg border-2 border-dashed border-green-600/50 px-4 py-12 text-center duration-300 ease-out">
            <h3 className="text-semibold text-3xl xl:text-4xl">Message sent!</h3>
            <span className="size-24 text-green-600">
              <Icons.CircleCheck className="clay-icon text-green-600" />
            </span>
            <TextButton onClick={() => setMessageStatus('not sent')} variant="secondary">
              Send another message
            </TextButton>
          </span>
        </Collapsible>

        {/* emailjs form */}
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleSubmit();
          }}
          className={twMerge(
            'glass-panel flex w-[18.75rem] flex-col gap-4 rounded-xl px-4 py-6 shadow-md shadow-black/10 transition-all duration-300 ease-out hover:shadow-xl',
            ['not sent', 'sending'].includes(messageStatus)
              ? 'translate-x-0 opacity-100'
              : 'pointer-events-none absolute translate-x-full opacity-0',
          )}
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
              Object.values(values).some((v) => !v.length) ||
              Object.values(errors).some(Boolean) ||
              messageStatus !== 'not sent'
            }
          />
        </form>
      </div>
    </div>
  );
};
