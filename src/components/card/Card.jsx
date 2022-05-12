import React, { useState } from 'react'
import './Card.css'

export default function Card({ index, question, answer, large, answers, setAnswers }) {
    const [playCard, setPlayCard] = useState(false)
    const [flip, setFlip] = useState(false)
    const [color, setColor] = useState('')
    const [icon, setIcon] = useState('')
    const isIcon = icon === ''

    function finishCard(answerColor, iconType) {
        setPlayCard(false)
        setColor(answerColor)
        setIcon(iconType)
        setAnswers([...answers, { color: answerColor, icon: iconType }])
    }

    return (
        <div>
            {playCard ? (
                <div className={`card selected ${flip ? 'flipped' : ''} ${large ? 'large' : '' }`}>
                    <div className='face answer'>
                        <p>{answer}</p>
                        <div className="buttons">
                            <button className='background-red' onClick={() => finishCard('red', 'close-circle')}>Não lembrei</button>
                            <button className='background-yellow' onClick={() => finishCard('yellow', 'help-circle')}>Quase não lembrei</button>
                            <button className='background-green' onClick={() => finishCard('green', 'checkmark-circle')}>Zap!</button>
                        </div>
                    </div>
                    <div className='face question'>
                        <p>{question}</p>
                        <img src="./images/flip.png" alt="flip" onClick={() => setFlip(true)} />
                    </div>
                </div>
            ) : (
                <div className={isIcon ? 'card' : `card ${color}`} onClick={isIcon ? () => setPlayCard(true) : () => false}>
                    <p className={isIcon ? '' : `underline ${color}`}>Pergunta {index} {status}</p>
                    <ion-icon name={isIcon ? 'play-outline' : icon}></ion-icon>
                </div>
            )}
        </div>
    )
}