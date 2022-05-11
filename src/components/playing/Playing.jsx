import React from "react";
import Card from "../card/Card";
import Progress from "../progress/Progress";
import { deck } from "../../mock/data";
import './Playing.css'

function shuffleCards() {
    return Math.random() - 0.5
}
deck.sort(shuffleCards)

export default function Playing() {
    function LoadDeck() {
        return deck.map((flashcard, i) => {
            return (
                <Card key={i} 
                    index={i + 1} 
                    question={flashcard.question} 
                    answer={flashcard.answer} 
                    large={flashcard.large} 
                />
            )
        })
    }

    return (
        <div className="playing">
            <div className="title">
                <img src="./images/logo.png" alt="small-logo" />
                <h1>ZapRecall</h1>
            </div>
            <LoadDeck />
            <Progress />
        </div>
    )
}