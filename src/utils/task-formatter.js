/**
 * Use to format task data from firebase
 */
export const taskFormatter = (data) => {
  const tasks = [];

  for (const taskKey in data) {
    tasks.push({ id: taskKey, text: data[taskKey].text });
  }

  return tasks;
};
