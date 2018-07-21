import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/**
 * Mock localStorage
 */
global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    token: Math.random().toString(36).substr(-8)
}

Enzyme.configure({ adapter: new Adapter() })
