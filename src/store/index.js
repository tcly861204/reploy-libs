import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const { composeWithDevTools } = require('redux-devtools-extension')
const contexts = require.context('@/redux', true, /index\.js$/)
const files = {}
contexts.keys().forEach(fileName => {
  const file = contexts(fileName).default
  const name = fileName.match(/(\w+)/ig)[0]
  files[name] = file
})
const reducers =  combineReducers(files)
const store = createStore(reducers,
  __DEBUG__ ?
  composeWithDevTools(compose(
    applyMiddleware(thunk, logger)
  )) :
  compose(
    applyMiddleware(thunk, logger)
  )
);
export default store