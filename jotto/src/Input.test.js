import { afterEach, beforeEach, describe, expect, jest, test } from '@jest/globals'
import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import { checkProps, findByTestAttr, storeFactory } from '../test/testUtils'
import Input from './Input'

const defaultProps = {
	secretWord: 'party'
}

const setup = (initialState = {}, props = {}) => {
	const store = storeFactory(initialState)
	const setupProps = { ...defaultProps, ...props }
	return mount(<Provider store={store}><Input {...setupProps} /></Provider>)
}

test('does not throw warning with expected props', () => {
	checkProps(Input, defaultProps)
})

describe('render', () => {
	describe('success is true', () => {
		let wrapper
		beforeEach(() => {
			wrapper = setup({ success: true })
		})

		test('renders without error', () => {
			const component = findByTestAttr(wrapper, 'component-input')
			expect(component.length).toBe(1)
		})

		test('input box does not show', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box')
			expect(inputBox.exists()).toBe(false)
		})

		test('submit button does not show', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button')
			expect(submitButton.exists()).toBe(false)
		})
	})

	describe('success is false', () => {
		let wrapper
		beforeEach(() => {
			wrapper = setup({ success: false })
		})

		test('renders without error', () => {
			const component = findByTestAttr(wrapper, 'component-input')
			expect(component.length).toBe(1)
		})

		test('input box shows', () => {
			const inputBox = findByTestAttr(wrapper, 'input-box')
			expect(inputBox.exists()).toBe(true)
		})

		test('submit button shows', () => {
			const submitButton = findByTestAttr(wrapper, 'submit-button')
			expect(submitButton.exists()).toBe(true)
		})
	})
})

describe('state controlled input field', () => {
	const mockSetCurrentGuess = jest.fn()
	let wrapper
	let originalUseState

	beforeEach(() => {
		mockSetCurrentGuess.mockClear()
		originalUseState = React.useState
		React.useState = (initialState) => [initialState, mockSetCurrentGuess]
		wrapper = setup({ success: false })
	})

	afterEach(() => {
		React.useState = originalUseState
	})

	test('state updates with value of input box upon change', () => {
		const inputBox = findByTestAttr(wrapper, 'input-box')
		const mockEvent = { target: { value: 'train' } }
		inputBox.simulate('change', mockEvent)

		expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
	})

	test('field is cleared upon submit button click', () => {
		const submitButton = findByTestAttr(wrapper, 'submit-button')
		submitButton.simulate('click')

		expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
	})
})