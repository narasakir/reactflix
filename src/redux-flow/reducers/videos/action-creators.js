'use strict'
import * as actions from './actions'
import { db } from 'config/firebase'

export const addVideo = ({ id, title }) => ({
  type: actions.ADD_VIDEO,
  payload: { id, title }
})

export const registerVideo = ({ id, title }) => async (dispatch) => {
  await db.ref('videos').child(id).update({ id, title })
  dispatch(addVideo({ id, title }))
}

export const fetchVideos = () => (dispatch) => {
  db.ref('videos').on('value', (snapshot) => {
    console.log('snapshot', snapshot.val())
  })
}
