/* eslint react/forbid-foreign-prop-types: 0 */
import { expect } from '@jest/globals'
import checkPropTypes from 'check-prop-types'
import { applyMiddleware, createStore } from 'redux'
import { middlewares } from '../src/configureStore'
import rootReducer from '../src/reducers/index'

export const storeFactory = (initialState) => {
	return createStore(rootReducer, initialState, applyMiddleware(...middlewares))
}

export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProps) => {
	const propError = checkPropTypes(
		component.propTypes,
		conformingProps,
		'prop',
		component.name
	)
	expect(propError).toBeUndefined()
}