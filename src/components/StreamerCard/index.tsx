import { type FC, memo } from 'react';
import { StreamerPropsType } from 'api/types';
import StreamerCardStyled from './styles';
import AnimateCounter from 'components/AnimateCounter';

const StreamerCardFC: FC<StreamerPropsType> = (props) => {
  const { displayName, score, picture } = props;

  return (
    <StreamerCardStyled className="streamer-card">
      <img
        className="streamer-card__img"
        alt={`${displayName} avatar`}
        src={picture}
      />
      <h3 className="streamer-card__name">{displayName}</h3>
      <span className="streamer-card__score">
        <AnimateCounter value={score} />
        pt
      </span>
    </StreamerCardStyled>
  );
};

const StreamerCard = memo(StreamerCardFC, (p, n) => p.score === n.score);
StreamerCard.displayName = 'StreamerCard';

export default StreamerCard;
