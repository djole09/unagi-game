import React from "react";

import { StyledInput } from "./Input.style";

interface InputProps {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  type?: string;
  max?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, name, value, onChange, type = 'text', max }) => (
  <StyledInput type={type} name={name} placeholder={type === 'date' ? 'Date' : placeholder} value={value} onChange={onChange} max={max} />
)