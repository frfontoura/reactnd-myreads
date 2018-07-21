import React from 'react'
import { shallow, mount } from 'enzyme'
import Book from '../Book'

const props = {
    book: {
        id: 'book_id',
        authors: [],
        imageLinks: { thumbnail: 'http...' }
    },
    onChangeShelf: jest.fn(),
    showDetails: true
}

const props2 = { ...props, book: { id: 'book_id', imageLinks: { } }}

describe('Component <Book />', () => {
    it('shallow renders without crashing', () => {
        expect(shallow(<Book { ...props} />))
    })

    it('shallow renders without crashing 2', () => {
        expect(shallow(<Book { ...props2} />))
    })

    it('should mount without crashing', () => {
        expect(mount(<Book {...props}/>))
    })

    it('expects onChangeShelf to be called on select change', () => {
        const wrapper = mount(<Book {...props}/>)
        wrapper.find('select').simulate('change')
        expect(props.onChangeShelf).toHaveBeenCalledTimes(1)
      })
})