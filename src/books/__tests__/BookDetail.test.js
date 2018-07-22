import React from 'react'
import { shallow , mount } from 'enzyme'
import BookDetail from '../BookDetail'

jest.mock('../../BooksAPI')

let props = {}

beforeEach(() => {
    props = {
        match: { params: {bookId: 100} }
    }
})

describe('Component <BookDetail />', () => {
    it('should shallow without error', () =>{
        expect(shallow(<BookDetail.WrappedComponent  {...props } />))
    })

    it('should change shelf', async () => {
        const wrapper = shallow(<BookDetail.WrappedComponent  {...props } />)
        wrapper.setProps({ history: [] })
        await wrapper.instance().componentDidMount()
        await wrapper.instance().changeShelf(wrapper.state('book'), 'read')
        expect(wrapper.instance().props['history'][0]).toBe('/')
    })

    it('should not change shelf', async () => {
        const wrapper = shallow(<BookDetail.WrappedComponent  {...props } />)
        wrapper.setProps({ history: [] })
        await wrapper.instance().componentDidMount()
        await wrapper.instance().changeShelf(wrapper.state('book'), 'currentlyReading')
        expect(wrapper.instance().props['history'].length).toBe(0)
    })
})