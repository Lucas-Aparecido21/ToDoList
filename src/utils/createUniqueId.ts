import { ITask } from "../App";

export const createUniqueId = (tasks: ITask[]): number => {
  const randomId = Math.random();

  const isRepeated = tasks.find((task) => task.id === randomId);

  if (isRepeated) {
    createUniqueId(tasks);
  }

  return randomId;
};
