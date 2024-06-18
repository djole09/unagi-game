import React from 'react';

import { Card } from '../../components/Card/Card';
import { useCollection } from '../../hooks/useCollection';
import { PlayerType } from '../../types';
import { CollectionContainer, NoData } from './Collection.style';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';

export const Collection = () => {
  const { collection, error, loading } = useCollection();

  if (loading) return <Loading />;

  if (error) return <Error message={error} />;

  return (
    <CollectionContainer>
      {collection.length > 0 ? (
        collection.map((player: PlayerType) => (
          <Card key={player.id} player={player} />
        ))
      ) : (
        <NoData>
          <h1>No data</h1>
        </NoData>
      )}
    </CollectionContainer>
  );
};
