import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <div className="search-books-bar">
        <Link className='close-search' to='/'>Close</Link>
        {props.children}
    </div>
)