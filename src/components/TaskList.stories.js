import React from "react";
import TaskList from "./TaskList";
import { taskData, actionsData } from "./Task.stories";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: 1, title: "Task 1" },
  { ...taskData, id: 2, title: "Task 2" },
  { ...taskData, id: 3, title: "Task 3" },
  { ...taskData, id: 4, title: "Task 4" },
  { ...taskData, id: 5, title: "Task 5" },
  { ...taskData, id: 6, title: "Task 6" },
];

const store = {
  getState: () => {
    return {
      tasks: defaultTasksData,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: 6, title: "Task 6 (pinned)", state: "TASK_PINNED" },
];

export const Default = () => (
  <TaskList tasks={defaultTasksData} {...actionsData} />
);

export const WithPinnedTasks = () => (
  <TaskList tasks={withPinnedTasksData} {...actionsData} />
);

export const Loading = () => <TaskList loading tasks={[]} {...actionsData} />;

export const Empty = () => <TaskList tasks={[]} {...actionsData} />;
