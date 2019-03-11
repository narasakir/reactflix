'use strict'

import createReducer from '../create-reducer'
import * as action from './actions'

const initialState = {}

const videos = createReducer(initialState, {
  [action.ADD_VIDEO]: (state, action) => ({
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      title: action.payload.title
    }
  })
})

export default videos
