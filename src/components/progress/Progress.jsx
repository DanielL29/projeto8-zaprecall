import React from "react";
import './Progress.css'

export default function Progress({ deckLength, answersLength, color, children }) {
    return (
        <div className="progress">
            <p>{answersLength}/{deckLength} CONCLUÍDOS</p>
            <div className={`progress-icons ${color}`}>
                {children}
            </div>
        </div>
    )
}