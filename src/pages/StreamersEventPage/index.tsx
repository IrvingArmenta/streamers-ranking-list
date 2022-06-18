import React from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
import { useApi } from 'api';
import StreamersListPageStyled from './styles';
import RankingList from './components/RankingList';

function StreamersListPage() {
  // fetching data on mount
  const { data } = useApi('https://webcdn.17app.co/campaign/pretest/data.json');

  return (
    <ErrorBoundary>
      <StreamersListPageStyled>
        <h1>Event Streamers Ranking List</h1>
        <RankingList data={data} />
      </StreamersListPageStyled>
    </ErrorBoundary>
  );
}

export default StreamersListPage;
