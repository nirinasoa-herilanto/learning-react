import { useState } from 'react';

import { fetchApi } from '../utils/fetch-api';

/**
 * Use to POST data from firebase
 * @features add DELETE method
 */
const useMutationData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetchApi({
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const generatedId = res.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      setData(createdTask);
    } catch (error) {
      setError(error.message || 'Something went wrong!');
    }
    setIsLoading(false);
  };

  return { data, isLoading, error, sendRequest };
};

export default useMutationData;
