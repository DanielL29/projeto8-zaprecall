import React, { useState } from 'react'
import './Card.css'

export default function Card({ index, question, answer, large }) {
    const [playCard, setPlayCard] = useState(false)
    const [flip, setFlip] = useState(false)

    return (
        <div>
            {playCard === true ? (
                <div className={`card selected ${flip === true ? 'flipped' : ''} ${large === true ? 'large' : '' }`}>
                    <div className='face answer'>
                        <p>{answer}</p>
                        <div className="buttons">
                            <button className='red'>Não lembrei</button>
                            <button className='yellow'>Quase não lembrei</button>
                            <button className='green'>Zap!</button>
                        </div>
                    </div>
                    <div className='face question'>
                        <p>{question}</p>
                        <img src="./images/flip.png" alt="flip" onClick={() => setFlip(true)} />
                    </div>
                </div>
            ) : (
                <div className='card' onClick={() => setPlayCard(true)}>
                    <p>Pergunta {index}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            )}
        </div>

    )
}