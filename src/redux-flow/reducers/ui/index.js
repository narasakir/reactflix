'use strict'

import createReducer from '../create-reducer'
import * as action from './actions'

const initialState = {
  isRegisterVideoFormOpened: false,
  isSingleVideoOpened: false
}

const ui = createReducer(initialState, {
  [action.OPEN_REGISTER_VIDEO]: (state) => ({
    ...state,
    isRegisterVideoFormOpened: true
  }),
  [action.CLOSE_REGISTER_VIDEO]: (state) => ({
    ...state,
    isRegisterVideoFormOpened: false
  }),
  [action.CLOSE_SINGLE_VIDEO]: (state) => ({
    ...state,
    isSingleVideoOpened: false
  })
})

export default ui
