import React, { useState } from 'react'
import './Card.css'

export default function Card() {
    const [playCard, setPlayCard] = useState(false)
    const [flip, setFlip] = useState(false)

    return (
        <div>
            {playCard === true ? (
                <div>
                    <div className={`card selected ${flip === true ? 'flipped' : ''}`}>
                        <div className='face answer'>
                            <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                            <div className="buttons">
                                <button className='red'>Não lembrei</button>
                                <button className='yellow'>Quase não lembrei</button>
                                <button className='green'>Zap!</button>
                            </div>
                        </div>
                        <div className='face question'>
                            <p>O que é jsx ?</p>
                            <img src="./images/flip.png" alt="flip" onClick={() => setFlip(true)} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='card' onClick={() => setPlayCard(true)}>
                    <p>Pergunta 1</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            )}
        </div>

    )
}