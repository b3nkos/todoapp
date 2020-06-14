import {
  UPDATE_USER_TASKS,
  GET_TASK_DETAIL,
  LOADING_TASKS_BY_USER,
  LOADING_TASK_DETAIL,
  ERROR_TASKS_BY_USER,
  TOGGLE_TASK_MODAL_DETAIL,
  CHANGE_TASK_NAME,
  CHANGE_TASK_DESCRIPTION,
  CHANGE_TASK_DONE_STATUS,
} from "../types/taskTypes";

export const getTasksByUserAction = () => async (dispatch) => {
  dispatch({
    type: LOADING_TASKS_BY_USER,
  });

  const taskList = [
    {
      id: 1,
      name: "Task 1",
      description: "Task one description",
      done: false,
      due_date: new Date(),
    },
    {
      id: 2,
      name: "Task 2",
      description: "Task two description",
      done: true,
      due_date: new Date(),
    },
    {
      id: 3,
      name: "Task 3",
      description: "Task three description",
      done: false,
      due_date: new Date(),
    },
    {
      id: 4,
      name: "Task 4",
      description: "Task four description",
      done: false,
      due_date: new Date(),
    },
    {
      id: 5,
      name: "Task 5",
      description: "Task five description",
      done: false,
      due_date: new Date(),
    },
  ];

  setTimeout(() => {
    dispatch({
      type: UPDATE_USER_TASKS,
      payload: taskList,
    });
  }, 1000);
};

export const getTaskDetailAction = (taskId) => async (dispatch, getState) => {
  const { tasks } = getState().taskReducer;

  dispatch({
    type: LOADING_TASK_DETAIL,
  });

  setTimeout(() => {
    const task = tasks.find((task) => task.id === taskId);

    dispatch({
      type: GET_TASK_DETAIL,
      payload: { ...task },
    });
  }, 1000);
};

export const toggleTaskModalDetailAction = () => async (dispatch, getState) => {
  const { openTaskModalDetail } = getState().taskReducer;

  dispatch({
    type: TOGGLE_TASK_MODAL_DETAIL,
    payload: !openTaskModalDetail,
  });
};

export const changeTaskNameAction = (taskName) => (dispatch, getState) => {
  const { task } = getState().taskReducer;

  dispatch({
    type: CHANGE_TASK_NAME,
    payload: { ...task, name: taskName },
  });
};

export const changeTaskDescriptionAction = (taskDescription) => (
  dispatch,
  getState
) => {
  const { task } = getState().taskReducer;

  dispatch({
    type: CHANGE_TASK_DESCRIPTION,
    payload: { ...task, description: taskDescription },
  });
};

export const changeTaskDoneStatusAction = () => (dispatch, getState) => {
  const { task } = getState().taskReducer;

  dispatch({
    type: CHANGE_TASK_DONE_STATUS,
    payload: { ...task, done: !task.done },
  });
};

export const changeTaskDoneStatusHttpAction = (taskId) => async (
  dispatch,
  getState
) => {
  const { tasks } = getState().taskReducer;

  const tasksUpdated = tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, done: !task.done };
    } else {
      return task;
    }
  });

  dispatch({
    type: UPDATE_USER_TASKS,
    payload: tasksUpdated,
  });
};
