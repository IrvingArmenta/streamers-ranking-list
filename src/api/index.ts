import { currentEnv } from 'utils';
import { StreamerArrayType } from './types';

async function api(url: string) {
  const lsData = localStorage.getItem('streamers-ranking-list/data');

  if (lsData) {
    const typedLsData = JSON.parse(lsData) as unknown as StreamerArrayType;
    return typedLsData;
  }

  try {
    const res = await fetch(url);
    const data: StreamerArrayType = await res.json();

    // saving data to LS to prevent unnecessary fetching
    localStorage.setItem('streamers-ranking-list/data', JSON.stringify(data));

    return data;
  } catch (error) {
    if (currentEnv.isDevelopment) {
      throw new Error('fetching failed');
    }
  }
}

export default api;
export { default as useApi } from './hook';
