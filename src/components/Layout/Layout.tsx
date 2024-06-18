import React, { PropsWithChildren, ReactNode } from 'react';

import { LayoutContainer, LayoutContent } from './Layout.style';
import { Nav } from '../Nav/Nav';

export const Layout: React.FC<PropsWithChildren<ReactNode>> = ({
  children,
}) => (
  <LayoutContainer>
    <Nav />
    <LayoutContent>{children}</LayoutContent>
  </LayoutContainer>
);
