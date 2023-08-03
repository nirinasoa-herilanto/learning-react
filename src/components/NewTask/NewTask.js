import { useEffect } from 'react';

import useMutationData from '../../hooks/use-mutation-data';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const { data, isLoading, error, sendRequest } = useMutationData();

  const enterTaskHandler = async (taskText) => {
    await sendRequest(taskText);
  };

  const { onAddTask } = props;

  useEffect(() => {
    data && onAddTask(data);
  }, [data, onAddTask]);

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
