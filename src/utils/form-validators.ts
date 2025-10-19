export const validateEmail = (input: string): string | null => {
  if (!input || input.trim() === '') {
    return 'Email is required';
  }

  const value = input.trim().toLowerCase();

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!emailRegex.test(value)) {
    return 'Invalid email';
  }

  return null;
};

export const validateFullName = (input: string): string | null => {
  if (!input || input.trim() === '') {
    return 'Full name is required';
  }

  const parts = input.trim().split(/\s+/);

  if (parts.length < 2) {
    return 'Full name is required';
  }

  if (!/^[a-zA-ZÀ-ÿ' -]+$/.test(input)) {
    return 'Invalid characters';
  }

  return null;
};

export const validateMessage = (input: string): string | null => {
  if (!input || input.trim() === '') {
    return 'Message is required';
  }

  return null;
};
