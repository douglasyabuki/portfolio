import { envs } from '@/envs';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface SendEmailValues {
  user_name: string;
  user_email: string;
  message: string;
}

interface SendEmailParams {
  values: SendEmailValues;
  onSuccess?: (result: EmailJSResponseStatus) => void;
  onError?: (error: unknown) => void;
}

export const sendEmail = async ({ values, onSuccess, onError }: SendEmailParams) => {
  try {
    const result = await emailjs.send(
      envs.serviceId,
      envs.templateId,
      {
        user_name: values.user_name,
        user_email: values.user_email,
        message: values.message,
      },
      envs.publicKey,
    );
    if (onSuccess) onSuccess(result);
  } catch (error) {
    if (onError) onError(error);
  }
};
