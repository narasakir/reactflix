import createReducer from '../create-reducer'
import * as actions from './actions'

const INITIAL_STATE = {
  messages: null,
  limit: 5,
};

const messageReducer = createReducer(INITIAL_STATE, {
  [actions.MESSAGES_SET]: (state, action) => ({
    ...state,
    messages: action.messages,
  }),
  [actions.MESSAGES_LIMIT_SET]: (state, action) => ({
    ...state,
    limit: action.limit,
  })
})

export default messageReducer;
