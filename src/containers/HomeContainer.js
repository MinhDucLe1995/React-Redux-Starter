import React from 'react'
import CounterContainer from './CounterContainer'

const HomeContainer = (props) => {
    return (
        <div class="container">
            <h1>
                HomePage
            </h1>
            <div class="col-xs">
                <CounterContainer />
            </div>
        </div>
    )
}
export default HomeContainer