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

const initialState = {
  tasks: [],
  task: {},
  isLoadingTasks: false,
  isLoadingTask: false,
  tasksError: "",
  taskError: "",
  openTaskModalDetail: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_TASKS: {
      return {
        ...state,
        isLoadingTasks: false,
        tasksError: "",
        tasks: action.payload,
      };
    }

    case LOADING_TASKS_BY_USER: {
      return { ...state, isLoadingTasks: true, tasksError: "" };
    }

    case GET_TASK_DETAIL: {
      return {
        ...state,
        isLoadingTask: false,
        taskError: "",
        task: action.payload,
      };
    }

    case ERROR_TASKS_BY_USER: {
      return { ...state, isLoading: true, error: "" };
    }

    case LOADING_TASK_DETAIL: {
      return { ...state, isLoadingTask: true, taskError: "", task: {} };
    }

    case TOGGLE_TASK_MODAL_DETAIL: {
      return { ...state, openTaskModalDetail: action.payload };
    }

    case CHANGE_TASK_NAME:
    case CHANGE_TASK_DESCRIPTION:
    case CHANGE_TASK_DONE_STATUS: {
      return { ...state, task: action.payload };
    }

    default: {
      return state;
    }
  }
};
