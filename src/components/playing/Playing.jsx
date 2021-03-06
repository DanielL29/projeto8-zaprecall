import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import Progress from "../progress/Progress";
import logoImg from '../../assets/images/logo.png'
import './Playing.css'

export default function Playing({ setStart, goal, deck }) {
    const [answers, setAnswers] = useState([])
    const [resultIcon, setResultIcon] = useState('sad')
    const [result, setResult] = useState('Putz...')
    const [message, setMessage] = useState('Ainda faltam alguns...Mas não desanime!')

    useEffect(() => {
        showResult()
    }, [answers])

    function showResult() {
        let counter = 0
        for (let i = 0; i < answers.length; i++) {
            if (answers[i].icon === 'checkmark-circle') {
                counter++
            }
        }
        if (counter >= Number(goal)) {
            setResultIcon('party')
            setResult('Parabéns!')
            setMessage('Você não esqueceu de nenhum flashcard!')
        }
    }

    return (
        <div className="playing">
            <div className="title">
                <img src={logoImg} alt="small-logo" />
                <h1>ZapRecall</h1>
            </div>
            {deck.map((flashcard, i) => {
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
            })}
            <Progress answersLength={answers.length} deckLength={deck.length} icon={resultIcon} result={result} message={message} setStart={setStart}>
                {answers.map((item, i) => {
                    return (
                        <div key={i} className={item.color}>
                            <ion-icon name={item.icon}></ion-icon>
                        </div>
                    )
                })}
            </Progress>
        </div>
    )
}