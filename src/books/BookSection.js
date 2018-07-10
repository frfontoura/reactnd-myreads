import React from 'react'
import BookList from './BookList'

export default props => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
            <div className="bookshelf-books">
                <BookList books={props.books} onChangeShelf={props.onChangeShelf}/>
            </div>
        </div>
    </div>
)