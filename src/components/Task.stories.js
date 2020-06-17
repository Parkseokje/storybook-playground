import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";

import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  decorators: [withKnobs],
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

export const Default = () => (
  <Task task={object("task", { ...taskData })} {...actionsData} />
);
export const Pinned = () => (
  <Task task={{ ...taskData, state: "TASK_PINNED" }} {...actionsData} />
);
export const Archieved = () => (
  <Task task={{ ...taskData, state: "TASK_ARCHIVED" }} {...actionsData} />
);

const longTitleString = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quo at sit. Soluta, fugit corrupti pariatur, beatae consectetur voluptatum architecto corporis dolore sit voluptatem saepe? Inventore voluptatem praesentium ipsum quisquam, dolores dolorum officiis nostrum nam quod voluptate excepturi atque at aperiam cum ut dolore. Excepturi, nemo explicabo illum atque nulla sint impedit pariatur culpa minus magni facilis facere quia earum numquam! Et magnam, corrupti voluptates soluta perferendis vero impedit quia tenetur porro laudantium optio eius sed dicta quasi, animi eum dolor consequuntur fugit iste. Error facilis nostrum enim mollitia. Repellat reprehenderit, sint facilis dicta accusamus quibusdam amet totam perspiciatis ea.`;
export const LongTitle = () => (
  <Task task={{ ...taskData, title: longTitleString }} {...actionsData} />
);
