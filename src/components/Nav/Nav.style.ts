import { Link } from 'react-router-dom';
import { css, styled } from 'styled-components';

export const NavContainer = styled.nav`
  height: 50px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[2]};
  box-shadow: 0 3px 6px ${({ theme }) => theme.colors.boxShadow1},
    0 8px 15px ${({ theme }) => theme.colors.boxShadow2},
    0 0 0 1px ${({ theme }) => theme.colors.borderColor};
  border-radius: 25px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledLink = styled(Link)<{ active: string }>`
  font-size: 1.2rem;
  text-decoration: none;

  ${({ active }) =>
    active &&
    css`
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
    `}
`;
