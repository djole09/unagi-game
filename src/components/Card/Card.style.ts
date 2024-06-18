import styled from 'styled-components';

export const StyledCard = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  border-radius: 15px;
  padding: 1em;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.cardBgColor};
  color: ${({ theme }) => theme.colors.defaultColor};
  user-select: none;
  box-shadow: 0 3px 6px ${({ theme }) => theme.colors.boxShadow1},
    0 8px 15px ${({ theme }) => theme.colors.boxShadow2},
    0 0 0 1px ${({ theme }) => theme.colors.borderColor};
  position: relative;
  transition: box-shadow 0.25;

  &:hover {
    box-shadow: 0 3px 6px ${({ theme }) => theme.colors.hoverShadow1},
      0 15px 25px ${({ theme }) => theme.colors.hoverShadow2},
      0 0 0 1px ${({ theme }) => theme.colors.borderHoverColor};
  }
`;
