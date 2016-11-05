import React, { Component } from 'react'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { Provider } from "react-redux"

import DefaultLayout from './DefaultLayout'
import HomeContainer from './HomeContainer'
import AboutContainer from './AboutContainer'

import '../styles'

class Application extends Component {
    render() {
        let {store} = this.props
        return (
            <Provider store={store}>
                <Router history={hashHistory}>
                    <Route path="/" component={DefaultLayout}>
                        <IndexRoute component={HomeContainer} />
                        <Route path="/about" component={AboutContainer} />
                    </Route>
                </Router>
            </Provider>)
    }
}

export default Application