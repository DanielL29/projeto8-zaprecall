import React, { useState, useEffect } from 'react'
import Playing from '../playing/Playing'
import { decks } from "../../mock/data"
import './Start.css'

export default function Start() {
    const [start, setStart] = useState(false)
    const [goal, setGoal] = useState('')
    const [deck, setDeck] = useState('')

    useEffect(() => {
        if(!start) {
            setGoal('')
            setDeck('')
        }
    }, [start])

    function limitGoal(e) {
        if(e.target.value > JSON.parse(deck).length) return
        setGoal(e.target.value)
    }

    return (
        <div>
            {start ? (
                <Playing setStart={setStart} goal={goal} deck={JSON.parse(deck)} />
            ) : (
                <div className={`start-screen ${goal >= 1 ? 'unlocked' : ''}`}> 
                    <img src="./images/logo.png" alt="logo" />
                    <h1>ZapRecall</h1>
                    <select value={deck} onChange={(e) => setDeck(e.target.value)}>
                        <option value="">Escolha seu deck</option>
                        {Object.values(decks).map((deck, i) => <option key={i} value={JSON.stringify(deck)}>{Object.keys(decks)[i]}</option>)}
                    </select>
                    <input type="number" max={8} disabled={deck === ''} placeholder={`Digite sua meta de zaps...(1-${deck !== '' ? JSON.parse(deck).length : 'a definir'})`} 
                        value={goal} onChange={(e) => limitGoal(e)} />
                    <button disabled={goal < 1} onClick={() => setStart(true)}>Iniciar Recall!</button>
                </div>
            )}
        </div>
    )
}