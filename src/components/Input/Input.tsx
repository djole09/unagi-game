import React from 'react';

import { StyledInput, StyledInputContainer } from './Input.style';

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e) => void;
  type?: string;
  error?: string;
  max?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  value,
  onChange,
  type = 'text',
  error,
  max,
  required,
}) => (
  <StyledInputContainer>
    {error && <h5>{error}</h5>}
    <StyledInput
      type={type}
      name={name}
      placeholder={type === 'date' ? 'Date' : placeholder}
      value={value}
      onChange={onChange}
      max={max}
      required={required}
    />
  </StyledInputContainer>
);
