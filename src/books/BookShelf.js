import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookSection from './BookSection'
import * as BooksAPI from '../BooksAPI'

class BookShelf extends Component {

    constructor(props) {
        super(props)

        this.changeShelf = this.changeShelf.bind(this)
    }

    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
        none: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(resp => {
            this.setState({
                currentlyReading: resp.filter(r => r.shelf === 'currentlyReading'),
                wantToRead: resp.filter(r => r.shelf === 'wantToRead'),
                read: resp.filter(r => r.shelf === 'read')
            })

        })
    }

    changeShelf(book, shelf) {
        const currentShelf = book.shelf

        if(currentShelf === shelf) return

        BooksAPI.update(book, shelf).then((books) => {
            book.shelf = shelf

            this.setState({
                [currentShelf]: this.state[currentShelf].filter(b => b.id !== book.id),
                [shelf]: [ ...this.state[shelf], book ]
            })
        })
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div>
                    <div className="list-books-content">
                        <div>
                            <BookSection title='Currently Reading' books={this.state.currentlyReading} onChangeShelf={this.changeShelf} />
                            <BookSection title='Want to Read' books={this.state.wantToRead} onChangeShelf={this.changeShelf}/>
                            <BookSection title='Read' books={this.state.read} onChangeShelf={this.changeShelf}/>
                        </div>
                    </div>

                    <div className="open-search">
                        <Link to='/search'>Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf