import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import BookShelf from './books/BookShelf'
import BookSerch from './books/BookSearch'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={BookShelf} />
        <Route path='/search' component={BookSerch} />
      </div>
    )
  }
}

export default BooksApp
