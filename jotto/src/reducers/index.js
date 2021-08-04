import { combineReducers } from 'redux'
import guessedWordsReducer from './guessedWordsReducer'
import secretWordReducer from './secretWordReducer'
import successReducer from './successReducer'

const rootReducer = combineReducers({
	success: successReducer,
	guessedWords: guessedWordsReducer,
	secretWord: secretWordReducer
})

export default rootReducer