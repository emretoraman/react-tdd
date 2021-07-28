import { useState } from 'react'
import './App.css'

function App() {
	const [count, setCount] = useState(0)
	const [isAlertVisible, setIsAlertVisible] = useState(false)

	const increment = () => setCount(count + 1)

	const decrement = () => {
		if (count === 0) {
			setIsAlertVisible(true)
			return
		}
		setCount(count - 1)
	}

	const renderedAlert = isAlertVisible && count === 0
		? (
			<h2
				data-test="alert"
				style={{ color: "red" }}
			>
				Counter can't go below 0
			</h2>
		)
		: null

	return (
		<div data-test="component-app">
			<h1 data-test="counter-display">
				The counter is currently&nbsp;
				<span data-test="count">{count}</span>
			</h1>
			<button data-test="increment-button" onClick={increment}>
				Increment counter
			</button>
			<button data-test="decrement-button" onClick={decrement}>
				Decrement counter
			</button>
			{renderedAlert}
		</div>
	)
}

export default App
