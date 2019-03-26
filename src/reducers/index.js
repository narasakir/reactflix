import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import messageReducer from './message/index';
import videosReducer from './videos'
import videoSingleReducer from './video-single'
import uiReducer from './ui'

const rootReducer = combineReducers({
  messageState: messageReducer,
  sessionState: sessionReducer,
  ui: uiReducer,
  userState: userReducer,
  videos: videosReducer,
  videoSingle: videoSingleReducer,
});

export default rootReducer;
