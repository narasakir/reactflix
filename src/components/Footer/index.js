import React from 'react'
import styled from 'styled-components'
import { footerHeight } from 'utils/contants'

const FooterMain = () => (<Footer> &copy; 2018 </Footer>)

const Footer = styled.footer`
  align-items: center;
  background: #333;
  color: #fff;
  display: flex;
  height: ${footerHeight};
  justify-content: center;
`

export default FooterMain
