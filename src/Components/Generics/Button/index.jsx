import React from 'react';
import { Container } from './style';

export const Button = ({ children, type, onClick, w, h ,className, disabled}) => {
  return (
    <Container onClick={onClick} className={className} type={type} w={w} h={h} disabled={disabled}>
      {children || 'Generic Button'}
    </Container>
  );
};

export default Button;