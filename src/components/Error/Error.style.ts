import styled from 'styled-components';

export const ErrorContainer = styled.div`
  height: fit-content;
  width: 75%;
  border-radius: 15px;
  padding: ${({ theme }) => theme.spacing[8]};
  background-color: ${({ theme }) => theme.colors.errorBg};

  h1,
  h2 {
    color: ${({ theme }) => theme.colors.crimson};
    background-color: initial;
  }
`;
