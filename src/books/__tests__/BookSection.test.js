import React from 'react'
import { shallow, mount } from 'enzyme'
import BookSection from '../BookSection'
import { MemoryRouter } from 'react-router'

const props = {
    books: [{ id: 'book_id' }],
    onChangeShelf: jest.fn()
}

describe('Component <BookSection />', () => {
    it('should mount without crashing', () => {
        expect(shallow(<BookSection {...props} />))
    })

    it('should mount a <BookList />', () => {
        const wrapper = mount(
            <MemoryRouter>
                <BookSection {...props} />
            </MemoryRouter>
        )
        expect(wrapper.find('BookList').length).toBe(1)
        expect(wrapper.find('h2').length).toBe(1)
    })
})