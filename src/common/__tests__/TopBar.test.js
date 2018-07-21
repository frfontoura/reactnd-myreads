import React from 'react'
import { shallow } from 'enzyme'
import TopBar from '../TopBar'

describe('Component <TopBar />', () => {
    it('shallow renders correctly', () => {
        expect(shallow(<TopBar />))
    })
})