import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router'

import BookSearch from '../BookSearch'

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

describe('Component <BookSearch />', () => {
    it('shallow renders without crashing', () => {
        expect(shallow(<BookSearch  />))
    })

    it('should mount a <BookSearch />', () => {
        const wrapper = mount(
            <MemoryRouter>
                <BookSearch />
            </MemoryRouter>
        )
    })

    it('should find a book', () => {
        const wrapper = shallow(<BookSearch.WrappedComponent />)
        wrapper.find('input').simulate('change', {target: {value: 'React'}})
    })

    it('should not find a book', () => {
        const wrapper = shallow(<BookSearch.WrappedComponent />)
        wrapper.find('input').simulate('change', {target: {value: ''}})
    })

    it('should not change shelf', () => {
        const wrapper = shallow(<BookSearch.WrappedComponent  />)
        wrapper.setProps({ history: [] })
        wrapper.instance().changeShelf(books[0], 'currentlyReading')
        expect(wrapper.instance().props['history'].length).toBe(0)
    })

    it('should change shelf and redirect', async () => {
        const wrapper = shallow(<BookSearch.WrappedComponent />)
        wrapper.setProps({ history: [] })
        await wrapper.instance().componentDidMount()
        await wrapper.instance().changeShelf(books[0], 'read')
        expect(wrapper.instance().props['history'][0]).toBe('/')
    })

    it('should find a book', async () => {
        const wrapper = shallow(<BookSearch.WrappedComponent />)
        wrapper.setProps({ history: [] })
        wrapper.setState({  booksOnShelf: books, query: 'React' })
        await wrapper.instance().componentDidMount()
        await wrapper.instance().search()
        expect(wrapper.instance().state['books'].length).toBe(1)
    })

    it('should not find a book', async () => {
        const wrapper = shallow(<BookSearch.WrappedComponent />)
        wrapper.setProps({ history: [] })
        wrapper.setState({ query: '' })
        await wrapper.instance().componentDidMount()
        await wrapper.instance().search()
        expect(wrapper.instance().state['books'].length).toBe(0)
    })


})