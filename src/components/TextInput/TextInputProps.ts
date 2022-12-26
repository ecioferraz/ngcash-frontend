import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

type TextInputProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
};

export default TextInputProps;
