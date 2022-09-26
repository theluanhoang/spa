import { INIT_STATE } from '../../constants';
import { getType, showSlideImage, hideSlideImage } from '../actions';

export default function slideShowReducers(state = INIT_STATE.slideShow, action) {
  switch (action.type) {
    case getType(showSlideImage):
      return {
        toggle: true,
      };
    case getType(hideSlideImage):
      return {
        toggle: false,
      };
    default:
      return state;
  }
}