import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSecretWord } from './actions/index'
import './App.css'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import Input from './Input'

const App = () => {
	const dispatch = useDispatch()

	const success = useSelector(state => state.success)
	const guessedWords = useSelector(state => state.guessedWords)

	useEffect(() => {
		dispatch(getSecretWord())
	}, [dispatch])

	return (
		<div className="container" data-test="component-app">
			<h1>Jotto</h1>
			<Congrats success={success} />
			<Input />
			<GuessedWords guessedWords={guessedWords} />
		</div>
	)
}

export default App
