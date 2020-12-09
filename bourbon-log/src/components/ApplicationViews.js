import React from 'react'
import {Route} from 'react-router-dom'
import { LogForm } from './BourbonForm'
import { BourbonList } from './BourbonList'
import { Home } from './Home'
import { LogProvider } from "./LogProvider"

export const ApplicationViews = (props) => {
    return (
        <>
        
        <LogProvider> 
        <Route exact path="/Home" render={
            props => <Home {...props} 
             />
         } />
         <Route path ="/Home/NewLog" render={
             props => <LogForm {...props} />
         } />
         <Route path ="/Home/ViewList" render={
             props => <BourbonList {...props} />
         } />
        </LogProvider>
        </>
    ) }
