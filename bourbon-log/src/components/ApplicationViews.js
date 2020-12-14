import React from 'react'
import { Route } from 'react-router-dom'
import { BourbonForm } from './Bourbon/BourbonForm'
import { BourbonList } from './Bourbon/BourbonList'
import { LogDetail } from './Bourbon/BourbonDetail'
import { Home } from './Nav/Home'
import { LogProvider } from "./Bourbon/LogProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <LogProvider>
                <Route exact path="/" render={
                    props => <Home {...props}
                    />
                } />
                <Route path="/NewLog" render={
                    props => <BourbonForm {...props} />
                } />
                <Route path="/NewLog/:logId(\d+)" render={
                    props => <LogDetail {...props} />
                } />
                <Route path="/logs/edit/:logId(\d+)" render={
                    props => <BourbonForm {...props} />
                } />
                <Route path="/ViewList" render={
                    props => <BourbonList {...props} />
                } />
            </LogProvider>
        </>
    )
}
