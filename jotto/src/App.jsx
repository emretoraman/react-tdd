import React, { useEffect } from 'react'
import { getSecretWord } from './actions/index'
import './App.css'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'
import Input from './Input'

const App = () => {
	//TODO: get props from shared state
	const success = false
	const secretWord = 'party'
	const guessedWords = []

	useEffect(() => {
		getSecretWord()
	}, [])

	return (
		<div className="container" data-test="component-app">
			<h1>Jotto</h1>
			<Congrats success={success} />
			<Input
				success={success}
				secretWord={secretWord}
			/>
			<GuessedWords guessedWords={guessedWords} />
		</div>
	)
}

export default App
