import { expect, test } from '@jest/globals'
import { shallow } from 'enzyme'
import React from 'react'
import { checkProps, findByTestAttr } from '../test/testUtils'
import App from './App'

const defaultProps = {}

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props }
	return shallow(<App {...setupProps} />)
}

test('renders without error', () => {
	const wrapper = setup()
	const component = findByTestAttr(wrapper, 'component-app')
	expect(component).toHaveLength(1)
})

test('does not throw warning with expected props', () => {
	checkProps(App, defaultProps)
})