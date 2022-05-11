import React, { useState } from 'react'
import './Card.css'

export default function Card() {
    const [playCard, setPlayCard] = useState(false)
    const [flip, setFlip] = useState(false)

    return (
        <div>
            {playCard === true ? (
                <div>
                    {flip === true ? (
                        <div className='card selected flipped'>

                        </div>
                    ) : (
                        <div className='card selected'>
                            <p>O que é jsx ?</p>
                            <img src="./images/flip.png" alt="flip" />
                        </div>
                    )}
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