import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookList from './BookList'

class BookSearch extends Component {

    constructor(props) {
        super(props)
        this.changeShelf = this.changeShelf.bind(this)
        this.timeout = null
    }

    state = {
        query: '',
        books: [],
        booksOnShelf: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(resp => this.setState({ booksOnShelf: resp }))
    }

    onChange(value) {
        this.setState({ query: value.trim() })

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            if (value.trim()) {
                this.search()
            } else {
                this.setState({ books: [] })
            }
        }, 600);
    }

    search() {
        BooksAPI.search(this.state.query)
            .then(resp => {
                if (resp.length) {

                    resp.forEach(b1 => {
                        this.state.booksOnShelf.forEach(b2 => {
                            if(b1.id === b2.id) {
                                b1.shelf = b2.shelf
                            }
                        })
                    });

                    this.setState({ books: resp })
                } else {
                    this.setState({ books: [] })
                }
            })
    }

    changeShelf(book, shelf) {
        const currentShelf = book.shelf

        if (currentShelf === shelf) return

        BooksAPI.update(book, shelf).then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className='close-search' to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            value={this.state.query}
                            onChange={(e) => this.onChange(e.target.value)}
                            placeholder="Search by title or author"
                            autoFocus={true} />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookList books={this.state.books} onChangeShelf={this.changeShelf} />
                </div>
            </div>
        )
    }
}

export default withRouter(BookSearch)