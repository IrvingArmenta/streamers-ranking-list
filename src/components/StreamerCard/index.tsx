import React, { FC, memo } from 'react';
import { StreamerPropsType } from 'api/types';
import StreamerCardStyled from './styles';
import AnimateCounter from 'components/AnimateCounter';

const StreamerCardFC: FC<StreamerPropsType> = (props) => {
  const { displayName, userID, score, picture } = props;
  return (
    <StreamerCardStyled id={userID}>
      <img alt={`${displayName} avatar`} src={picture} />
      {displayName}
      <AnimateCounter value={score} />
    </StreamerCardStyled>
  );
};

const StreamerCard = memo(StreamerCardFC, (p, n) => p.score === n.score);
StreamerCard.displayName = 'StreamerCard';

export default StreamerCard;
