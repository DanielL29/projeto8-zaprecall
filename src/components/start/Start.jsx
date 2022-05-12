import React, { useState, useEffect } from 'react'
import Playing from '../playing/Playing'
import './Start.css'

export default function Start() {
    const [start, setStart] = useState(false)
    const [goal, setGoal] = useState('')

    useEffect(() => {
        if(!start) setGoal('')
    }, [start])

    return (
        <div>
            {start ? (
                <Playing setStart={setStart} goal={goal} />
            ) : (
                <div className={`start-screen ${goal >= 1 ? 'unlocked' : ''}`}>
                    <img src="./images/logo.png" alt="logo" />
                    <h1>ZapRecall</h1>
                    <input type="number" placeholder="Digite sua meta de zaps..." value={goal} onChange={(e) => setGoal(e.target.value)} />
                    <button disabled={goal < 1} onClick={() => setStart(true)}>Iniciar Recall!</button>
                </div>
            )}
        </div>
    )
}