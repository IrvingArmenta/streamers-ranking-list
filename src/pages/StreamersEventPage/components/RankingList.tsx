import React, { FC, useEffect, useState } from 'react';
import AnimatedList from 'components/AnimatedList';
import { randomUpdateStreamerArray } from 'api/api-utils';
import { StreamerArrayType } from 'api/types';
import StreamerCard from 'components/StreamerCard';
import ErrorBoundary from 'components/ErrorBoundary';

const RankingList: FC<{ data: StreamerArrayType }> = (props) => {
  const { data } = props;
  const [localStreamerData, setLocalStreamerData] = useState<StreamerArrayType>(
    []
  );

  const updateLocalArray = () => {
    if (localStreamerData.length) {
      const incomingData = randomUpdateStreamerArray(localStreamerData);
      setLocalStreamerData(incomingData);
    }
  };

  useEffect(() => {
    setLocalStreamerData(data);
  }, [data]);

  useEffect(() => {
    if (localStreamerData.length) {
      const tickId = setInterval(updateLocalArray, 400);

      return () => {
        clearInterval(tickId);
      };
    }
  }, [localStreamerData]);

  return (
    <ErrorBoundary>
      <AnimatedList
        className="ranking-list"
        items={localStreamerData}
        renderItem={(streamerProps) => {
          return <StreamerCard {...streamerProps} />;
        }}
      />
    </ErrorBoundary>
  );
};

export default RankingList;
