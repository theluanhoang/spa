import { combineReducers } from 'redux';
import modal from './modal';
import slideShow from './slideShow';
import navbar from './navbar';
import blogSearch from './blogSearch'

export default combineReducers({
  modal,
  slideShow,
  navbar,
  blogSearch
});