import { ChangeEvent, HTMLInputTypeAttribute } from 'react';

type TextInputProps = {
  datalist?: string[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  placeholder: string;
  value: string;
  type?: HTMLInputTypeAttribute;
};

export default TextInputProps;
