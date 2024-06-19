import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  from { width: 4% }
  to { width: 100% }
`;

export const LoadingContainer = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};
`;

export const LoadingStyled = styled.div`
  height: 4px;
  width: 4%;
  background-color: ${({ theme }) => theme.colors.errorBg};
  border-radius: 2px;
  animation: ${loadingAnimation} 1s infinite;
`;
