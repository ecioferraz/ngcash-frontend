import { ReactNode } from 'react';

type TextCardProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'huge' | 'xhuge';
  uppercase?: boolean;
};

export default TextCardProps;
