import { SHOW_MENU } from "../types/menuTypes";

export const showMenuAction = () => async (dispatch, getState) => {
  const { menuIsOpen } = getState().menuReducer;

  dispatch({
    type: SHOW_MENU,
    payload: !menuIsOpen,
  });
};
