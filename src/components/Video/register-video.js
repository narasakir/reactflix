'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { closeRegisterVideo } from '../../reducers/ui/action-creators'
import { compose } from 'recompose'
import { withFirebase } from '../Firebase'

class RegisterVideo extends Component {
  state = {
    id: null,
    title: null
  }

  onSubmit = e => {
    e.preventDefault()
    e.persist()

    const { id, title } = this.state
    this.props.firebase.registerVideo(id, title)
    this.setState({ id: null, title: null });

    e.target.reset()
    e.target[0].focus()

  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, id } = this.state

    return (
      <Form onSubmit={this.onSubmit}>
        <h2>Cadastrar vídeo</h2>

        <label htmlFor='id'>ID do vídeo:</label>
        <input type='text' id='id' name='id' value={id} onChange={this.onChange} />

        <label htmlFor='title'>Título do vídeo:</label>
        <input type='text' id='title' name='title' value={title} onChange={this.onChange} />

        <button type='submit'>Cadastrar</button>

        <ButtonClose type='button' onClick={onCloseRegisterVideo}>&times;</ButtonClose>
      </Form>
    )
  }
}

const Form = styled.form`
  padding: 10px;
  position: relative;
`

const ButtonClose = styled.button`
  border-radius: 50%;
  font-size: 20px;
  height: 30px;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
`

const mapDispatchToProps = (dispatch) => ({
  onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
})

export default compose(
  withFirebase,
  connect(null, mapDispatchToProps)
)(RegisterVideo)
