import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { shallow, mount } from 'enzyme'

import BookShelf from '../BookShelf'
import BookSection from '../BookSection'

jest.mock('../../BooksAPI')

let books = []

beforeEach(() => {
    books = [
        {
            id: 'book_id',
            authors: [],
            imageLinks: { thumbnail: '' },
            shelf: 'currentlyReading'
        }
    ]
})

describe('Component <BookShelf />', () => {
    it('should shallow without crashing', () => {
        expect(shallow(<BookShelf />))
    })

    it('should render three sections', () => {
        const wrapper = mount(
            <MemoryRouter>
                <BookShelf />
            </MemoryRouter>
        )
        expect(wrapper.find(BookSection).length).toBe(3)
    })

    it('should change shelf', async () => {
        const wrapper = shallow(<BookShelf />)
        await wrapper.instance().componentDidMount()
        await wrapper.instance().changeShelf(books[0], 'read')
        expect(wrapper.state('currentlyReading').length).toBe(0)
        expect(wrapper.state('read').length).toBe(1)
    })

    it('should not change shelf', async () => {
        const wrapper = shallow(<BookShelf />)
        await wrapper.instance().componentDidMount()
        await wrapper.instance().changeShelf(books[0], 'currentlyReading')
        expect(wrapper.state('currentlyReading').length).toBe(1)
    })
})
