import ErrorBoundary from 'components/ErrorBoundary';
import { useApi } from 'api';
import StreamersListPageStyled from './styles';
import { RankingList } from './components';
import { Suspense } from 'react';

function StreamersListPage() {
  // fetching data on mount
  const { data } = useApi('https://webcdn.17app.co/campaign/pretest/data.json');

  return (
    <ErrorBoundary>
      <StreamersListPageStyled>
        <h1>Event Streamers Ranking List</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <RankingList data={data} />
        </Suspense>
      </StreamersListPageStyled>
    </ErrorBoundary>
  );
}

export default StreamersListPage;
