import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/index'

export const middlewares = [reduxThunk]

const store = createStore(rootReducer, { secretWord: 'party' }, applyMiddleware(...middlewares))

export default store