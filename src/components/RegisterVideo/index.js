import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'
import { closeRegisterVideo } from 'reducers/ui/action-creators'

const RegisterVideo = ({ onSubmit, onCloseRegisterVideo }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar Video</h2>

    <label htmlFor='id'>Id do Video</label>
    <input type='text' id='id' name='id' />
    <label htmlFor='title'>Titulo do Video</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Cadastrar</button>
    <ButtonClose type='button' onClick={onCloseRegisterVideo}>&times;</ButtonClose>
  </Form>
)

const Form = styled.form`
  padding: 10px;
  position: relative;
`
const ButtonClose = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  margin: 0px;
  padding: 0px;
  width: 30px;
  height: 30px;
  line-height: 1;
  border-radius: 50%;
  font-size 20px;
`
const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()

    const {
      id: { value: id },
      title: { value: title }
    } = e.target

    await dispatch(registerVideo({ id, title }))
    e.target.reset()
    e.target.elements[0].focus()
  },
  onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
