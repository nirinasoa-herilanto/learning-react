import { useEffect, useState } from 'react';

import { fetchApi } from '../utils/fetch-api';
import { taskFormatter } from '../utils/task-formatter';

/**
 * Use to query data from firebase
 */
const useQueryData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetchApi();
      const results = taskFormatter(res);

      setData(results);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return { data, isLoading, error, refetchData: sendRequest };
};

export default useQueryData;
