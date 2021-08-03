import { beforeEach, describe, expect, test } from '@jest/globals'
import { mount } from 'enzyme'
import React from 'react'
import { findByTestAttr } from '../test/testUtils'
import App from './App'

const setup = (state = {}) => {
	const wrapper = mount(<App />)

	const inputBox = findByTestAttr(wrapper, 'input-box')
	const mockEvent = { target: { value: 'train' } }
	inputBox.simulate('change', mockEvent)

	const submitButton = findByTestAttr(wrapper, 'submit-button')
	submitButton.simulate('click')

	return wrapper
}

describe.skip('no words guessed', () => {
	let wrapper

	beforeEach(() => {
		wrapper = setup({
			secretWord: 'party',
			success: false,
			guessedWords: []
		})
	})

	test('creates GuessedWords table with one row', () => {
		const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
		expect(guessedWordRows).toHaveLength(1)
	})
})

describe.skip('some words guessed', () => {
	let wrapper

	beforeEach(() => {
		wrapper = setup({
			secretWord: 'party',
			success: false,
			guessedWords: [
				{ guessedWord: 'agile', letterMatchCount: 1 }
			]
		})
	})

	test('adds row to GuessedWords table', () => {
		const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
		expect(guessedWordRows).toHaveLength(2)
	})
})

describe.skip('secret word guessed', () => {
	let wrapper

	beforeEach(() => {
		wrapper = setup({
			secretWord: 'party',
			success: false,
			guessedWords: []
		})

		const inputBox = findByTestAttr(wrapper, 'input-box')
		const mockEvent = { target: { value: 'party' } }
		inputBox.simulate('change', mockEvent)

		const submitButton = findByTestAttr(wrapper, 'submit-button')
		submitButton.simulate('click')
	})

	test('adds row to GuessedWords table', () => {
		const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
		expect(guessedWordRows).toHaveLength(2)
	})

	test('displays congrats component', () => {
		const congrats = findByTestAttr(wrapper, 'component-congrats')
		expect(congrats.text().length).toBeGreaterThan(0)
	})

	test('does not display input component contents', () => {
		const inputBox = findByTestAttr(wrapper, 'input-box')
		expect(inputBox.exists()).toBe(false)

		const submitButton = findByTestAttr(wrapper, 'submit-button')
		expect(submitButton.exists()).toBe(false)
	})
})