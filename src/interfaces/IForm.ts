// Exports the interface of useReducer state to Form.tsx
export interface IFormState {
  user_name: string;
  user_email: string;
  message: string;
  nameError: string;
  emailError: string;
  messageError: string;
}

// Exports the interface of useReducer actions to Form.tsx
export interface IFormAction {
  type: 'updateName' | 'updateEmail' | 'updateMessage' | 'validate';
  value?: string;
}
