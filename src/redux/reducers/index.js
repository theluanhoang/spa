import { combineReducers } from 'redux';
import modal from './modal';
import slideShow from './slideShow';
import navbar from './navbar';

export default combineReducers({
  modal,
  slideShow,
  navbar
});