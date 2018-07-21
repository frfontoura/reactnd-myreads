import React from 'react'
import { shallow } from 'enzyme'
import LinkButton from '../LinkButton'

describe('Component <LinkButton />', () => {
    it('shallow renders correctly', () => {
        expect(shallow(<LinkButton linkTo='/'/>))
    })
})