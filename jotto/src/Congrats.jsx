import PropTypes from 'prop-types'
import React from 'react'

const Congrats = ({ success }) => (
	<div data-test="component-congrats">{
		success 
			? (
				<span data-test="congrats-message">
					Congratulation! You guessed the word!
				</span>
			) 
			: null
	}</div>
)

Congrats.propTypes = {
	success: PropTypes.bool.isRequired
}

export default Congrats