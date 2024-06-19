import { useEffect, useState } from 'react';

import { PlayerType } from '../types';

export const useCollection = () => {
  const [collection, setCollection] = useState<PlayerType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8001/cards')
      .then((res) => res.json())
      .then((data) => {
        setCollection(data as PlayerType[]);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return { collection, error, loading };
};
