import { SHOW_MENU } from "../types/menuTypes";

const initialState = {
  menuIsOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MENU: {
      return { ...state, menuIsOpen: action.payload };
    }

    default: {
      return state;
    }
  }
};
