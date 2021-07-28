import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { shallow } from 'enzyme'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders non-empty component without crashing', () => {
	const wrapper = shallow(<App />)
	expect(wrapper.exists()).toBe(true)
})
