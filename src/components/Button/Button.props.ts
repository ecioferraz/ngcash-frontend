import { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit';
};

export default ButtonProps;
