import React, { useState } from 'react'
import './Start.css'

export default function Start() {
    const [start, setStart] = useState(false)

    return (
        <div className={`start-screen ${start === true ? 'hidden' : ''}`}>
            <img src="./images/logo.png" alt="logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => setStart(true)}>Iniciar Recall!</button>
        </div>
    )
}