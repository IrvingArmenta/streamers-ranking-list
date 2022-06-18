import { useEffect, useState } from 'react';
import { currentEnv } from 'utils';
import { StreamerArrayType } from './types';
import { sleep } from './api-utils';
import api from 'api';

// hook to use the api
function useApi(url?: string) {
  const [data, setData] = useState<StreamerArrayType>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (url) {
      const handlingAsync = async () => {
        setIsFetching(true);

        await sleep(1000);

        try {
          const incomingData = await api(url);

          if (incomingData) {
            setData(incomingData);
          }
        } catch (error) {
          if (currentEnv.isDevelopment) {
            const typedError = error as Error;
            console.error('fetching failed', typedError, typedError.message);
          }
        } finally {
          setIsFetching(false);
        }
      };

      handlingAsync();
    }
  }, [url]);

  return {
    data,
    isFetching,
  };
}

export default useApi;
