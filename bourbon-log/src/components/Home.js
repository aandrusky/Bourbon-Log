//DO I EVEN WANT THIS MODULE?   'X' FOR DOUBT

import React from 'react';

export const Home = (props) => {

    return (
        <>
            <div className="Home-Buttons">
                <button className="List-Button" onClick={() => props.history.push("/ViewList")}>
                    View List
                </button>
            </div>

            <div className="Log-Button">
                <button onClick={() => props.history.push("/NewLog")}>
                    New Log
                </button>
            </div>
        </>
    )
}