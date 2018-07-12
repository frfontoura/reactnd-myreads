import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <Link to={props.linkTo}>
        <button className={'btn btn-' + props.buttonStyle}>
            {props.description}
        </button>
    </Link>
)