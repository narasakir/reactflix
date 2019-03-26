import React, { Fragment } from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
    <Fragment>
        <Header />
        {children}
        <Footer />
    </Fragment >
)

export default Layout