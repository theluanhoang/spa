import { createAction } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const showModal = createAction('SHOW_MODAL');
export const hideModal = createAction('HIDE_MODAL');
export const showSlideImage = createAction('SHOW_SLIDE_IMAGE');
export const hideSlideImage = createAction('HIDE_SLIDE_IMAGE');