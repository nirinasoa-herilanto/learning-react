import React, { useState, useCallback, useMemo } from 'react';

import useQueryData from './hooks/use-query-data';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const { data, isLoading, error, refetchData } = useQueryData();

  const taskAddHandler = useCallback((task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  }, []);

  useMemo(() => {
    setTasks(data);
  }, [data]);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={refetchData}
      />
    </React.Fragment>
  );
};

export default App;
