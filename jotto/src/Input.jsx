import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

const Input = ({ secretWord }) => {
	const [currentGuess, setCurrentGuess] = React.useState('')
	const success = useSelector(state => state.success)

	const handleClick = () => {
		//TODO: Update guessedWords global state
		//TODO: Check against secretWord and optionally update success global state
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

Input.propTypes = {
	secretWord: PropTypes.string.isRequired
}

export default Input