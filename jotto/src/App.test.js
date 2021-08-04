/* eslint-disable import/first */
import { beforeEach, describe, expect, jest, test } from '@jest/globals'
import { mount } from 'enzyme'
import React from 'react'
import { findByTestAttr } from '../test/testUtils'
import App from './App'

jest.mock('./actions/index')
const { getSecretWord: mockGetSecretWord } = require('./actions/index')

const setup = () => {
	return mount(<App />)
}

test('renders without error', () => {
	const wrapper = setup()
	const component = findByTestAttr(wrapper, 'component-app')
	expect(component).toHaveLength(1)
})

describe('get secret word', () => {
	beforeEach(() => {
		mockGetSecretWord.mockClear()
	})

	test('getSecretWord runs on App mount', () => {
		setup()
		expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
	})

	test('getSecretWord does not run on App update', () => {
		const wrapper = setup()
		mockGetSecretWord.mockClear()

		wrapper.setProps()

		expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
	})
})