import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../shared/Spinner";
import Error from "../shared/Error";
import TaskItem from "./TaskItem";
import {
  getTasksByUserAction,
  toggleTaskModalDetailAction,
  getTaskDetailAction,
  changeTaskDoneStatusHttpAction,
} from "../../actions/taskAction";
import TaskModalDetail from "./TaskModalDetail";

class TaskList extends Component {
  componentDidMount() {
    const { getTasksByUserAction } = this.props;
    getTasksByUserAction();
  }

  openTaskDetailHandler = async (taskId) => {
    const { toggleTaskModalDetailAction, getTaskDetailAction } = this.props;
    await toggleTaskModalDetailAction();
    await getTaskDetailAction(taskId);
  };

  changeTaskDoneStatusHandler = async (taskId) => {
    const { changeTaskDoneStatusHttpAction } = this.props;
    await changeTaskDoneStatusHttpAction(taskId);
  };

  render() {
    console.log(this.props);
    const {
      isLoadingTasks,
      tasksError,
      tasks,
      openTaskModalDetail,
    } = this.props;

    if (tasksError) {
      return <Error message={this.props.error} />;
    }

    if (isLoadingTasks) {
      return <Spinner />;
    }

    if (openTaskModalDetail) {
      return <TaskModalDetail />;
    }

    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-half mb-3">
              <h1 className="is-size-1 has-text-centered">My Tasks</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns is-mobile is-centered">
            <div className="column is-half">
              {tasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  changeTaskDoneStatusHandler={() => {
                    this.changeTaskDoneStatusHandler(task.id);
                  }}
                  openTaskDetailHandler={() => {
                    this.openTaskDetailHandler(task.id);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ taskReducer }) => taskReducer;

export default connect(mapStateToProps, {
  getTasksByUserAction,
  toggleTaskModalDetailAction,
  getTaskDetailAction,
  changeTaskDoneStatusHttpAction,
})(TaskList);
