import { INIT_STATE } from '../../constants';
import { getType, turnOffBlog, turnOnBlog } from '../actions';

export default function blogSearchReducers(state = INIT_STATE.blogSearch, action) {
  switch (action.type) {
    case getType(turnOnBlog):
      return {
        turnBlog: true,
      };
    case getType(turnOffBlog):
      return {
        turnBlog: false,
      };
    default:
      return state;
  }
}