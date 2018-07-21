import React from 'react'
import { shallow, mount } from 'enzyme'
import BookList from '../BookList'
import { MemoryRouter } from 'react-router'

const props = {
    books: [{ id: 'book_id' }],
    onChangeShelf: jest.fn()
}

describe('Component <BookList />', () => {
    it('should mount without crashing', () => {
        expect(shallow(<BookList {...props} />))
    })

    it('expects to map through an array of books and creates a li tag for each one of them', () => {
        const wrapper = mount(
            <MemoryRouter>
                <BookList {...props} />
            </MemoryRouter>
        )
        expect(wrapper.find('li').length).toBe(1)
    })
})