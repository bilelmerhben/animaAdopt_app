import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <h1>only for Auth</h1>
                <Link to="/logout">logout</Link>
            </div>
        )
    }
}
