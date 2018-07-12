import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

import BookShelf from './books/BookShelf'
import BookSerch from './books/BookSearch'
import BookDetail from './books/BookDetail'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={BookShelf} />
          <Route path='/search' component={BookSerch} />
          <Route path='/detail/:bookId' component={BookDetail} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
