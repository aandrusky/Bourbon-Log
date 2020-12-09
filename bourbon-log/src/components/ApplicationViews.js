import React from 'react'
import {Route} from 'react-router-dom'
import { Home } from './Home'

export const ApplicationViews = (props) => {
    return (
        <>
        <Route exact path="/" render={
            props => <Home {...props}  />
        } />
        </>
    )}
