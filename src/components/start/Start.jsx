import React, { useState } from 'react'
import Playing from '../playing/Playing'
import './Start.css'

export default function Start() {
    const [start, setStart] = useState(false)

    return (
        <div>
            {start === true ? (
                <Playing />
            ) : (
                <div className={`start-screen`}>
                    <img src="./images/logo.png" alt="logo" />
                    <h1>ZapRecall</h1>
                    <button onClick={() => setStart(true)}>Iniciar Recall!</button>
                </div>
            )}
        </div>
    )
}