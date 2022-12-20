import { ChangeEvent } from 'react';

type TextInputProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  placeholder: string;
  type?: HTMLInputElement['type'];
  value?: string;
};

export default TextInputProps;
