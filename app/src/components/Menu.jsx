import React, { Component } from "react";
import { connect } from "react-redux";
import { showMenuAction } from "../actions/menuAction";
import { Link } from "react-router-dom";

class Menu extends Component {
  burgerHandler = () => {
    const { showMenuAction } = this.props;

    showMenuAction();
  };

  render() {
    const { menuIsOpen } = this.props.menuReducer;

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
                alt="Todo App logo"
              />
            </a>

            <a
              onClick={this.burgerHandler}
              href="#menu"
              role="button"
              className={`navbar-burger burger ${menuIsOpen && "is-active"}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu ${menuIsOpen && "is-active"}`}>
            <div className="navbar-start">
              <Link className="navbar-item" to="/tasks">
                Tasks
              </Link>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link className="button is-primary" to="/sing-up">
                    <strong>Sign up</strong>
                  </Link>
                  <Link className="button is-light" to="/login">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ menuReducer }) => {
  return {
    menuReducer,
  };
};

const mapDispatchToProps = {
  showMenuAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
