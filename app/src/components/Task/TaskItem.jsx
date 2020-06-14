import React from "react";

const TaskItem = (props) => (
  <div className="box">
    <article className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <input
              type="checkbox"
              className="mr-2"
              checked={props.task.done}
              onChange={props.changeTaskDoneStatusHandler}
            />
            <a
              className={`has-text-weight-medium is-size-5 ${
                props.task.done && "text-stroke"
              }`}
              onClick={props.openTaskDetailHandler}
            >
              {props.task.name}
            </a>
          </p>
        </div>
      </div>
    </article>
  </div>
);

export default TaskItem;
