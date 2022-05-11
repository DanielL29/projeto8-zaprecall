import React from "react";
import Card from "../card/Card";
import Progress from "../progress/Progress";
import './Playing.css'

export default function Playing() {
    return (
        <div className="playing">
            <div className="title">
                <img src="./images/logo.png" alt="small-logo" />
                <h1>ZapRecall</h1>
            </div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Progress />
        </div>
    )
}