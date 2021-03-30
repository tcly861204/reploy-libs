import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import Message from '@/components/message'
import store from '@/store'
import App from '@/App'
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
React.Component.prototype.Message = Message
