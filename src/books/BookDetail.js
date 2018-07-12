import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import TopBar from '../common/TopBar'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class BookDetails extends Component {

    constructor(props) {
        super(props)

        this.changeShelf = this.changeShelf.bind(this)
    }

    state = {
        book: {}
    }

    componentDidMount() {
        BooksAPI.get(this.props.match.params.bookId).then(resp => {
            this.setState({ book: resp })
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
            <div>
                <TopBar />

                <div className="search-books-results">
                    <div className='books-grid'>
                        <Book book={this.state.book} showDetails={true}  onChangeShelf={this.changeShelf} />

                        <div className='books-details'>
                            <strong>Description</strong>
                            <p>{this.state.book.description}</p>
                            <a href={this.state.book.infoLink} className='btn btn-outline-success' target="_blank" rel="noopener noreferrer" >More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BookDetails)