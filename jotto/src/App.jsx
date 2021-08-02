import React from 'react'
import './App.css'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'

const App = () => (
	<div className="container" data-test="component-app">
		<h1>Jotto</h1>
		<Congrats success={true} />
		<GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
	</div>
)

export default App
