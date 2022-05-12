import React from "react";
import './Progress.css'

export default function Progress({ deckLength, answersLength, children, icon, result, message, setStart }) {
    return (
        <div className="progress">
            {answersLength === deckLength ? (
                <div className="result">
                    <div>
                        <img src={`./images/${icon}.png`} alt="result-icon" />
                        <h1>{result}</h1>
                    </div>
                    <p>{message}</p>
                </div>
            ): ''}
            <p>{answersLength}/{deckLength} CONCLUÍDOS</p>
            <div className="progress-icons">
                {children}
            </div>
            {answersLength === deckLength ? <button onClick={() => setStart(false)}>REINICIAR RECALL</button> : ''}
        </div>
    )
}