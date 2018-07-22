import React, { Component } from 'react'
import BookList from './BookList'
import PropTypes from 'prop-types'

class BookSection extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <div className="bookshelf-books">
                        <BookList books={this.props.books} onChangeShelf={this.props.onChangeShelf}/>
                    </div>
                </div>
            </div>
        )
    }
}

BookSection.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default BookSection