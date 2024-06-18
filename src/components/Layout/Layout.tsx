import React, { PropsWithChildren, ReactNode } from "react";

import { LayoutContainer } from "./Layout.style";
import { Nav } from "../Nav/Nav";

export const Layout: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => (
  <LayoutContainer>
    <Nav />
    {children}
  </LayoutContainer>
)