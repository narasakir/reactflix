import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { firebase } from 'config/firebase'

const Login = () => (
  <StyledFirebaseAuth
    uiConfig={{
      signInFlow: 'redirect',
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    }}
    firebaseAuth={firebase.auth()}
  />
)

export default Login
