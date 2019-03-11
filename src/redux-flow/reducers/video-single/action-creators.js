'use strict'
import * as actions from './actions'

export const selectVideoSingle = (id) => ({
  type: actions.SELECT_VIDEO_SINGLE,
  payload: { id }
})
