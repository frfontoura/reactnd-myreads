import React, { Component } from 'react'
import Book from './Book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class BookList extends Component {
    render() {
        const { books, onChangeShelf } = this.props
        books.sort(sortBy('title'))

        return (
            <ol className="books-grid">
                {books.map(book =>
                    <li key={book.id}>
                        <Book book={book} onChangeShelf={onChangeShelf} />
                    </li>
                )}
            </ol>
        )
    }
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookList