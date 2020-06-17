import React from "react";
import { action } from "@storybook/addon-actions";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: 1,
  title: "Test task",
  state: "TASK_INBOX",
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchieveTask: action("onArchieveTask"),
};

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;
export const Pinned = () => (
  <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
);
export const Archieved = () => (
  <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
);
