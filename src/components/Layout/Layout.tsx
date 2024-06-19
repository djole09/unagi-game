import React, { PropsWithChildren, ReactNode, useEffect } from 'react';

import { LayoutContainer, LayoutContent } from './Layout.style';
import { Nav } from '../Nav/Nav';
import { PAGES } from '../../constants';
import { useHistory, useLocation } from 'react-router-dom';

export const Layout: React.FC<PropsWithChildren<ReactNode>> = ({
  children,
}) => {
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.length <= 1) history.push(PAGES.COLLECTION);
  }, [history, pathname]);

  return (
    <LayoutContainer>
      <Nav />
      <LayoutContent>{children}</LayoutContent>
    </LayoutContainer>
  );
};
