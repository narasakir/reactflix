'use strict'

import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyAtH-ZxL3MNezXnxzr3JrQCSH2yHec6rpc',
  authDomain: 'reactflix-d9409.firebaseapp.com',
  databaseURL: 'https://reactflix-d9409.firebaseio.com',
  projectId: 'reactflix-d9409',
  storageBucket: 'reactflix-d9409.appspot.com',
  messagingSenderId: '443088599786'
})

const db = firebase.database()

export { db }
