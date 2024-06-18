import React from 'react';

import { PlayerType } from '../../types';
import { StyledCard } from './Card.style';
import { formatDate } from '../../utils/formatDate';

export const Card: React.FC<{ player: PlayerType }> = ({ player }) => (
  <StyledCard>
    <img src={player.player.image} alt={player.player.image} />
    <h4>
      {player.player.firstname} {player.player.lastname}
    </h4>
    <p>{formatDate(player.player.birthday)}</p>
  </StyledCard>
);
