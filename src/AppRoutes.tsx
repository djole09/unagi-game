import React from 'react';

import { PAGES } from './constants';
import { Collection } from './pages/Collection/Collection';
import { CreateCard } from './pages/CreateCard/CreateCard';

export interface RouteType {
  path: string;
  component: React.ComponentType<{}> | (() => JSX.Element);
}

export const routes: RouteType[] = [
  {
    path: PAGES.COLLECTION,
    component: Collection,
  },
  {
    path: PAGES.CREATE_CARD,
    component: CreateCard,
  },
];
