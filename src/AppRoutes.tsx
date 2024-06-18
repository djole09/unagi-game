import React, { ReactElement } from 'react';
import { PAGES } from './constants';
import { Collection } from './pages/Collection/Collection';
import { CreateCard } from './pages/CreateCard';

export interface RouteType {
  path: string;
  component: any;
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
