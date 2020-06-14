import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../shared/Spinner";
import Error from "../shared/Error";

import {
  getTaskDetailAction,
  changeTaskNameAction,
  changeTaskDescriptionAction,
  toggleTaskModalDetailAction,
  changeTaskDoneStatusAction,
} from "../../actions/taskAction";

class TaskModalDetail extends Component {
  taskNameChangeHandler = (event) => {
    const { changeTaskNameAction } = this.props;
    changeTaskNameAction(event.target.value);
  };

  taskDescriptionChangeHandler = (event) => {
    const { changeTaskDescriptionAction } = this.props;
    changeTaskDescriptionAction(event.target.value);
  };

  taskDoneStatusChangeHandler = () => {
    const { changeTaskDoneStatusAction } = this.props;
    changeTaskDoneStatusAction();
  };

  closeTaskModalDetailHandler = () => {
    const { toggleTaskModalDetailAction } = this.props;
    toggleTaskModalDetailAction();
  };

  render() {
    const { isLoadingTask, taskError, task } = this.props;

    if (taskError) {
      return <Error message={taskError} />;
    }

    return (
      <div className="modal is-active is-clipped">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{task.name}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.closeTaskModalDetailHandler}
            ></button>
          </header>
          <section className="modal-card-body">
            {isLoadingTask ? (
              <Spinner />
            ) : (
              <Fragment>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Task Name"
                      value={task.name}
                      onChange={this.taskNameChangeHandler}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Description</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Task description"
                      value={task.description}
                      onChange={this.taskDescriptionChangeHandler}
                    ></textarea>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        checked={task.done}
                        onChange={this.taskDoneStatusChangeHandler}
                      />{" "}
                      Done
                    </label>
                  </div>
                </div>
              </Fragment>
            )}
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button
              className="button"
              onClick={this.closeTaskModalDetailHandler}
            >
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ taskReducer }) => taskReducer;

export default connect(mapStateToProps, {
  getTaskDetailAction,
  changeTaskNameAction,
  changeTaskDescriptionAction,
  toggleTaskModalDetailAction,
  changeTaskDoneStatusAction,
})(TaskModalDetail);
