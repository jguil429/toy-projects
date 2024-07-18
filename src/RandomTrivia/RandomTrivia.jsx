import { useState } from 'react';
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
    const [showQuestion, setShowQuestion] = useState(false); // New state variable

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
                setShowQuestion(true); // Show the question container
            } else {
                setError('Oops! Something went wrong :(');
            }
        } catch (err) {
            setError('Oops! Something went wrong :(');
        }
    };

    const handleOptionClick = (option) => {
        setSelectedAnswer(option);
        if (option === correctAnswer) {
            setResult('Correct!');
        } else {
            setResult('Incorrect!');
        }
    };

    return (
        <div className={ styles.container }>
            <div className={ `${styles.content} ${showQuestion ? styles.contentWithQuestion : ''}` }>
                <Button onClick={generateQuestion} className={ `${styles.triviaButton} ${showQuestion ? styles.triviaButtonTop : ''}` } buttonText="Riddle Me This..."/>
                {showQuestion && (
                    <div className={ `${styles.questionContainer} ${styles.fadeIn}` }>
                        {error ? <p>{error}</p> : <p dangerouslySetInnerHTML={{ __html: question }} />}
                        {options.length > 0 && (
                            <div className={styles.optionsContainer}>
                                {options.map((option, index) => (
                                    <div key={ index }
                                         className={ `${styles.option}  
                                                     ${selectedAnswer === option
                                             ? (option === correctAnswer
                                                 ? styles.correct : styles.incorrect)
                                             : ''}
                                                  ` }
                                         onClick={() => handleOptionClick(option)}>
                                        <input
                                            type="radio"
                                            id={`option-${index}`}
                                            name="trivia"
                                            value={option}
                                            checked={ selectedAnswer === option }
                                            readOnly
                                        />
                                        <label htmlFor={`option-${index}`} dangerouslySetInnerHTML={{ __html: option }} />
                                    </div>
                                ))}
                            </div>
                        )}
                         <div className={styles.result}>
                            <p>{ result ?? '' }</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RandomTrivia;


