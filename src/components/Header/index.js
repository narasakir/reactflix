import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { headerHeight } from 'utils/contants'
import { openRegisterVideo } from 'reducers/ui/action-creators'

const MainHeader = ({ onOpenRegisterVideo }) => (
  <Header>
    <Logo>Reactflix</Logo>
    <RegisterButton onClick={onOpenRegisterVideo}>Cadastrar video</RegisterButton>
  </Header>
)

const Logo = styled.h1`
  color: red;
  margin-bottom: 0;
`
const Header = styled.header`
  align-items: center;
  background: #333;
  height: ${headerHeight};
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  & ${Logo}{
    font-size: 30px;
  }
`

const RegisterButton = styled.button`
  margin-bottom: 0px;
`
const mapDispatchToProps = (dispatch) => ({
  onOpenRegisterVideo: () => dispatch(openRegisterVideo())
})

export default connect(null, mapDispatchToProps)(MainHeader)
