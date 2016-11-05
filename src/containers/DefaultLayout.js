import React from 'react'
import MainNavContainer from './MainNavContainer'
const DefaultLayout = (props) => {
    return (
        <div>
            <MainNavContainer />
            <div class="root-container">
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayout