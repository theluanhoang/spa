import { createAction } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const showModal = createAction('SHOW_MODAL');
export const hideModal = createAction('HIDE_MODAL');