'use client';

import React, { useState, useEffect } from 'react';
import {Card, CardBody, Typography, Input, Button, Progress, Alert} from "@material-tailwind/react";

export default function Page() {
    const startingTimer = 500; // 5 seconds
    const [answer, setAnswer] = React.useState("");
    const [timeLeft, setTimeLeft] = useState(0);
    const [question, setQuestion] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [stopTimer, setStopTimer] = useState(false);
    const [isStarted, setIsStarted] = useState(false);
    const [answerIsCorrect, setAnswerIsCorrect] = useState(null);
    const [score, setScore] = useState(0);
    const [totalAnswered, setTotalAnswered] = useState(0);


    const newQuestion = () => {
        setAnswerIsCorrect(null)
        setIsStarted(true)
        setTimeLeft(startingTimer)
        setStopTimer(false)
        const num1 = Math.floor(Math.random() * 12) + 1;
        const num2 = Math.floor(Math.random() * 12) + 1;
        setQuestion(`${num1}x${num2}`);
        setCorrectAnswer(num1 * num2);
    }

    const onChange = ({target}) => {setAnswer(target.value)}

    const submitAnswer = () => {
        setStopTimer(true)
        if (parseInt(answer) === correctAnswer) {
            setScore(score + 1)
        }
        setTotalAnswered(totalAnswered + 1)
        setAnswerIsCorrect(parseInt(answer) === correctAnswer)
    }

    useEffect(() => {
        if(timeLeft > 0 && !stopTimer) {
            const timerId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 10);

            return () => clearInterval(timerId);
        }
    }, [timeLeft, stopTimer]);

    return (
        <div>
            <Typography className="text-gray-400" variant="h1">Multiplication</Typography>
            <Typography className="text-gray-400" variant="h5">Provide the answer before the timer runs out!</Typography>
            <Card>
                <CardBody>
                    <Typography className="text-black" variant="h2">{question}</Typography>
                </CardBody>
                <CardBody>
                    <Progress value={timeLeft / 5} size="lg" />
                </CardBody>
                <CardBody>
                    <Typography className="text-black" variant="h3">Score: {score} / {totalAnswered}</Typography>
                </CardBody>
                <CardBody>
                    <div className="space-y-4">
                        <Input
                            type="text"
                            label="Enter your answer here"
                            value={answer}
                            onChange={onChange}
                            className="pr-20"
                            containerProps={{
                                className: "min-w-0",
                            }}
                        />
                        <div className="flex space-x-4">
                            <Button
                                size="sm"
                                color={"blue"}
                                disabled={!answer}
                                className="rounded"
                                onClick={submitAnswer}
                            >
                                Answer
                            </Button>
                            <Button
                                size="sm"
                                color={"green"}
                                className="rounded"
                                onClick={newQuestion}
                            >
                                {isStarted ? "Next Question" : "Start"}
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
            {(answerIsCorrect !== null) &&
                <Card>
                    <CardBody>
                        {answerIsCorrect ?
                            <Alert className="bg-green-500">Correct!</Alert> :
                            <Alert className="bg-red-500">Incorrect!</Alert>
                        }
                    </CardBody>
                </Card>
            }
        </div>
    );
}