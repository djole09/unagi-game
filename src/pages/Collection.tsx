import React from 'react';

import { fetchCollection } from '../lib/collection';

import './Collection.css';
import { Card } from '../components/Card/Card';

export const Collection = () => {
  const collection = fetchCollection();
  const card = collection[0];
  console.log(card);

  /**
   * Step 1: Render the card
   */
  return <Card player={card} />;
};
