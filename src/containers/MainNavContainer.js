import React from 'react'
import { Link } from 'react-router';

const MainNavContainer = (props) => {
    return (
        <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
            <div class="container">
                <Link class="navbar-brand" to="/">RRS</Link>
                <ul class="nav navbar-nav col-xs-12 col-sm-6 col-md-5 col-lg-4">
                    <li class="nav-item">
                        <Link to="/" activeClassName="active" class="nav-link" >Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" activeClassName="active" class="nav-link" >About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default MainNavContainer