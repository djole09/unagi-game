import React from 'react';

import {
  StyledInput as StyledButton,
  StyledInputContainer as StyledButtonContainer,
} from './Input.style';

export const SubmitButton = () => (
  <StyledButtonContainer>
    <StyledButton type="submit" placeholder="Submit" isbutton="true" />
  </StyledButtonContainer>
);
