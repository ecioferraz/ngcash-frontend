import { ReactNode } from 'react';

type TextCardProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
  size?: 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
};

export default TextCardProps;
