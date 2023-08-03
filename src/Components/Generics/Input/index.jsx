import React, { forwardRef } from 'react';
import { Container,Icon,Wrapper } from './style';

export const Input = forwardRef(({
  type,
  onChange,
  value,
  defaultValue,
  placeholder,
  name,
  w,
  h,
  icon,
  className,
  style
},ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
    <Container
    ref={ref}
      icon={icon}
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
      w={w}
      h={h}
      className={className}
      style={style}
      ></Container>
      </Wrapper>
  )
}
)

export default Input;