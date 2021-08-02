import { beforeEach, describe, expect, test } from '@jest/globals'
import { shallow } from 'enzyme'
import React from 'react'
import { checkProps, findByTestAttr } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
	guessedWords: [
		{ guessedWord: 'train', letterMatchCount: 3 },
		{ guessedWord: 'agile', letterMatchCount: 1 },
		{ guessedWord: 'party', letterMatchCount: 5 }
	]
}

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props }
	return shallow(<GuessedWords {...setupProps} />)
}

test('does not throw warning with expected props', () => {
	checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
	let wrapper
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] })
	})

	test('renders without error', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words')
		expect(component.length).toBe(1)
	})

	test('renders instructions to guess a word', () => {
		const instructions = findByTestAttr(wrapper, 'guess-instructions')
		expect(instructions.text()).not.toBe('')
	})
})

describe('if there are words guessed', () => {
	const guessedWords = defaultProps.guessedWords
	let wrapper
	beforeEach(() => {
		wrapper = setup({ guessedWords })
	})

	test('renders without error', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words')
		expect(component.length).toBe(1)
	})

	test('renders "guessed words" section', () => {
		const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
		expect(guessedWordsNode.length).toBe(1)
	})

	test('renders correct number of guessed words', () => {
		const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
		expect(guessedWordNodes.length).toBe(guessedWords.length)
	})
})