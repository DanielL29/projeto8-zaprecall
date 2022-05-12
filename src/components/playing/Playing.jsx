import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import Progress from "../progress/Progress";
import { deck } from "../../mock/data";
import './Playing.css'

export default function Playing({ setStart }) {
    const [answers, setAnswers] = useState([])
    const [resultIcon, setResultIcon] = useState('sad')
    const [result, setResult] = useState('Putz...')
    const [message, setMessage] = useState('Ainda faltam alguns...Mas não desanime!')

    useEffect(() => {
        showResult()
    }, [answers])

    function showResult() {
        for(let i = 0; i < answers.length; i++) {
            if(answers[i].icon === 'close-circle') {
                setResultIcon('sad')
                setResult('Putz...')
                setMessage('Ainda faltam alguns...Mas não desanime!')
                return
            } else {
                setResultIcon('party')
                setResult('Parabéns!')
                setMessage('Você não esqueceu de nenhum flashcard!')
            }
        }
    }

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
            {LoadDeck()}
            <Progress answersLength={answers.length} deckLength={deck.length} icon={resultIcon} result={result} message={message} setStart={setStart}>
                <LoadDeckAnswers />
            </Progress>
        </div>
    )
}