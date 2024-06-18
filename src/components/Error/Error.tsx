import React from 'react';

import { ErrorContainer } from './Error.style';

interface ErrorProps {
  message: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => (
  <ErrorContainer>
    <h1>Error:</h1>
    <h2>{message}</h2>
  </ErrorContainer>
);
