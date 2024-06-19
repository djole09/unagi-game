import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 50%;
  font-size: 1.2rem;
  border-radius: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border: none;
  box-shadow: 0 3px 6px ${({ theme }) => theme.colors.boxShadow1},
    0 8px 15px ${({ theme }) => theme.colors.boxShadow2},
    0 0 0 1px ${({ theme }) => theme.colors.borderColor};

  &:hover {
    box-shadow: 0 3px 6px ${({ theme }) => theme.colors.hoverShadow1},
      0 15px 25px ${({ theme }) => theme.colors.hoverShadow2},
      0 0 0 1px ${({ theme }) => theme.colors.borderHoverColor};
  }
`;
