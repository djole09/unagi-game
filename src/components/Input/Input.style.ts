import styled, { css } from 'styled-components';

export const StyledInputContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[2]};

  input {
    width: 100%;
  }

  h5 {
    font-weight: 100;
    color: ${({ theme }) => theme.colors.crimson};
  }
`;

export const StyledInput = styled.input<{ isbutton?: string }>`
  font-size: 1.2rem;
  border-radius: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[2]};
  border: none;
  box-shadow: 0 3px 6px ${({ theme }) => theme.colors.boxShadow1},
    0 8px 15px ${({ theme }) => theme.colors.boxShadow2},
    0 0 0 1px ${({ theme }) => theme.colors.borderColor};
  color-scheme: dark;

  &:hover {
    box-shadow: 0 3px 6px ${({ theme }) => theme.colors.hoverShadow1},
      0 15px 25px ${({ theme }) => theme.colors.hoverShadow2},
      0 0 0 1px ${({ theme }) => theme.colors.borderHoverColor};
  }

  ${({ theme, isbutton }) =>
    isbutton &&
    css`
      &:active {
        cursor: pointer;
        box-shadow: 0 3px 3px ${theme.colors.hoverShadow1},
          0 10px 20px ${theme.colors.hoverShadow2},
          0 0 0 1px ${theme.colors.borderHoverColor};
      }
    `}
`;
