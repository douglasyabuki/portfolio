import { useCallback, useState } from 'react';

type FormErrors<T> = Partial<Record<keyof T, string>>;

interface UseFormOptions<T> {
  initialValues: T;
  validators: Partial<Record<keyof T, (value: string) => string | null>>;
  onSubmit: (values: T) => void;
}

export const useForm = <T extends Record<string, string>>({
  initialValues,
  validators,
  onSubmit,
}: UseFormOptions<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({});

  const handleChange = useCallback(
    (key: keyof T, value: string) => {
      setValues((prev) => ({ ...prev, [key]: value }));

      if (errors[key] && validators[key]) {
        const error = validators[key]?.(value);
        setErrors((prev) => ({ ...prev, [key]: error ?? undefined }));
      }
    },
    [errors, validators],
  );

  const onValidate = useCallback(
    (field?: keyof T): boolean => {
      const newErrors: FormErrors<T> = { ...errors };

      if (field) {
        const validate = validators[field];
        if (validate) {
          const error = validate(values[field]);
          newErrors[field] = error ?? undefined;
          setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
          return !error;
        }
        return true;
      }

      for (const key in validators) {
        const validate = validators[key];
        if (validate) {
          const error = validate(values[key]);
          if (error) {
            newErrors[key] = error;
          } else {
            delete newErrors[key];
          }
        }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    },
    [validators, values, errors],
  );

  const handleSubmit = useCallback(
    (e?: React.FormEvent<HTMLFormElement>) => {
      if (e) e.preventDefault();

      const isValid = onValidate();
      if (!isValid) return;

      try {
        onSubmit(values);
        setValues(initialValues);
        setErrors({});
      } catch (err) {
        console.warn(err);
      }
    },
    [onSubmit, onValidate, values, initialValues],
  );

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    onValidate,
  };
};
