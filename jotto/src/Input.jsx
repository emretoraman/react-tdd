import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guessWord } from './actions'

const Input = () => {
	const dispatch = useDispatch()

	const [currentGuess, setCurrentGuess] = React.useState('')
	const success = useSelector(state => state.success)

	const handleClick = (event) => {
		event.preventDefault()
		dispatch(guessWord(currentGuess))
		setCurrentGuess('')
	}

	return (
		<div data-test="component-input">{
			success
				? null
				: (
					<form className="form-inline">
						<input
							type="text"
							className="mb-2 mx-sm-3"
							placeholder="enter guess"
							value={currentGuess}
							onChange={(event) => setCurrentGuess(event.target.value)}
							data-test="input-box"
						/>
						<button
							className="btn btn-primary mb-2"
							onClick={handleClick}
							data-test="submit-button"
						>
							Submit
						</button>
					</form>
				)
		}</div>
	)
}

export default Input