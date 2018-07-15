import React, { Component } from 'react'
import LinkButton from '../common/LinkButton'
import If from '../common/If'


class Book extends Component {

    render() {
        const { book, onChangeShelf } = this.props
        const authors = book.authors || []
        const shelf = book.shelf || 'none'
        const thumbnail = (book.imageLinks && book.imageLinks.thumbnail) ? book.imageLinks.thumbnail : ''

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(e) => onChangeShelf(book, e.target.value)} >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors" style={{ marginBottom: 10 }}>{authors.join(', ')}</div>

                <If test={!this.props.showDetails}>
                    <LinkButton description='Detail' linkTo={`/detail/${book.id}`} buttonStyle='outline-primary btn-block' />
                </If>
            </div>
        )
    }
}

export default Book