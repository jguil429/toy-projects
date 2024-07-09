import React, { useState } from 'react';
import styles from './RandomTrivia.module.css';
import Button from "../Button/Button.jsx";
import axios from "axios";

function RandomTrivia() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const generateQuestion = async () => {
        try {
            const url = `https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple`;
            const response = await axios.get(url);

            if (response.data && response.data.results && response.data.results.length > 0) {
                const trivia = response.data.results[0];
                const question = trivia.question;
                const correctAnswer = trivia.correct_answer;
                const options = shuffleArray([...trivia.incorrect_answers, correctAnswer]);

                setQuestion(question);
                setOptions(options);
                setCorrectAnswer(correctAnswer);
                setSelectedAnswer('');
                setResult(null);
                setError(null);
            } else {
                setError('Oops! Something went wrong :(');
            }
        } catch (err) {
            setError('Oops! Something went wrong :(');
        }
    };

    const handleOptionChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedAnswer(selectedOption);
        if (selectedOption === correctAnswer) {
            setResult('Correct!');
        } else {
            setResult('Incorrect!');
        }
    };

    return (
        <div className={ styles.container }>
            <div className={ styles.content }>
                <Button onClick={generateQuestion} className={ styles.triviaButton } buttonText="Riddle Me This..."/>
                <div className={styles.questionContainer}>
                    {error ? <p>{error}</p> : <p dangerouslySetInnerHTML={{ __html: question }} />}
                    {options.length > 0 && (
                        <div>
                            {options.map((option, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        id={`option-${index}`}
                                        name="trivia"
                                        value={option}
                                        checked={selectedAnswer === option}
                                        onChange={handleOptionChange}
                                    />
                                    <label htmlFor={`option-${index}`} dangerouslySetInnerHTML={{ __html: option }} />
                                </div>
                            ))}
                        </div>
                    )}
                    { result && <p>{ result }</p> }
                </div>
            </div>
        </div>
    );
}

export default RandomTrivia;
