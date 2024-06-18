import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavContainer, StyledLink } from './Nav.style';
import { PAGES } from '../../constants/index';
import { formatLink } from '../../utils/formatLink';

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <NavContainer>
      {Object.values(PAGES).map((page: string) => (
        <StyledLink
          to={page}
          active={page === pathname ? 'true' : ''}
          key={page}
        >
          {formatLink(page)}
        </StyledLink>
      ))}
    </NavContainer>
  );
};
