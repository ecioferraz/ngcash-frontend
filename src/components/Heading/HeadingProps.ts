import { ReactNode } from 'react';

type HeadingProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode;
  size?: 'small' | 'medium' | 'big' | 'huge';
  uppercase?: boolean;
};

export default HeadingProps;
