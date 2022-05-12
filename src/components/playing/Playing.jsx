import React, { useState } from "react";
import Card from "../card/Card";
import Progress from "../progress/Progress";
import { deck } from "../../mock/data";
import './Playing.css'

export default function Playing() {
    const [answers, setAnswers] = useState([])

    function LoadDeck() {
        return deck.map((flashcard, i) => {
            return (
                <Card key={i} 
                    index={i + 1} 
                    question={flashcard.question} 
                    answer={flashcard.answer} 
                    large={flashcard.large} 
                    setAnswers={setAnswers}
                    answers={answers}
                />
            )
        })
    }

    function LoadDeckAnswers() {
        return answers.map((item, i) => {
            return (
                <div key={i} className={item.color}>
                    <ion-icon name={item.icon}></ion-icon>
                </div>
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
            <Progress answersLength={answers.length} deckLength={deck.length}>
                <LoadDeckAnswers />
            </Progress>
        </div>
    )
}