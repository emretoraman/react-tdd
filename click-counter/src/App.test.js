import { expect, test } from '@jest/globals'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { shallow } from 'enzyme'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
  *  Factory function to create a ShallowWrapper for the App component
  * @function setup
  * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />)

const findByTestAttr = (wrapper, val) => 
	wrapper.find(`[data-test="${val}"]`)

test('renders without error', () => {
	const wrapper = setup()
	const appComponent = findByTestAttr(wrapper, 'component-app')
	expect(appComponent.length).toBe(1)
})

test('renders increment button', () => {
	const wrapper = setup()
	const button = findByTestAttr(wrapper, 'increment-button')
	expect(button.length).toBe(1)
})

test('renders counter display', () => {
	const wrapper = setup()
	const counterDisplay = findByTestAttr(wrapper, 'counter-display')
	expect(counterDisplay.length).toBe(1)
})

test('counter starts at 0', () => {
	const wrapper = setup()
	const count = Number(findByTestAttr(wrapper, 'count').text())
	expect(count).toBe(0)
})

test('clicking increment button increments counter', () => {
	const wrapper = setup()

	const button = findByTestAttr(wrapper, 'increment-button')
	button.simulate('click')

	const count = Number(findByTestAttr(wrapper, 'count').text())
	expect(count).toBe(1)
})

test('clicking decrement button decrements counter', () => {
	const wrapper = setup()

	const incrementButton = findByTestAttr(wrapper, 'increment-button')
	incrementButton.simulate('click')

	const decrementButton = findByTestAttr(wrapper, 'decrement-button')
	decrementButton.simulate('click')

	const count = Number(findByTestAttr(wrapper, 'count').text())
	expect(count).toBe(0)
})

test('counter doesn\'t get below 0', () => {
	const wrapper = setup()

	const button = findByTestAttr(wrapper, 'decrement-button')
	button.simulate('click')

	const count = Number(findByTestAttr(wrapper, 'count').text())
	expect(count).toBe(0)
})

test('clicking decrement button when counter is 0 shows alert', () => {
	const wrapper = setup()

	const button = findByTestAttr(wrapper, 'decrement-button')
	button.simulate('click')

	const alert = findByTestAttr(wrapper, 'alert')
	expect(alert.length).toBe(1)
})

test('alert gets dismissed if counter is greater than 0', () => {
	const wrapper = setup()

	const decrementButton = findByTestAttr(wrapper, 'decrement-button')
	decrementButton.simulate('click')

	const incrementButton = findByTestAttr(wrapper, 'increment-button')
	incrementButton.simulate('click')

	const alert = findByTestAttr(wrapper, 'alert')
	expect(alert.length).toBe(0)
})