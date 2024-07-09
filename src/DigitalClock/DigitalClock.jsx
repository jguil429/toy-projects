import React, { useState, useEffect } from 'react';
import styles from './DigitalClock.module.css';
import CitySearch from './CitySearch';

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    const [timeZone, setTimeZone] = useState('UTC');

    const defaultBackgroundImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzExMTV8MHwxfHNlYXJjaHwxfHxnbG9iZXxlbnwwfHx8fDE3MjA0NjY5NjV8MA&ixlib=rb-4.0.3&q=80&w=1080';
    const [backgroundImage, setBackgroundImage] = useState(defaultBackgroundImage);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    function formatTime() {
        const options = {
            timeZone,
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        };

        return new Intl.DateTimeFormat('en-US', options).format(time);
    }

    return (
        <div className={styles.clockWrapper} style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover' }}>
            <div className={styles.clockContainer}>
                <CitySearch onCitySelect={setTimeZone} onBackgroundImageUpdate={setBackgroundImage} defaultBackgroundImage={ defaultBackgroundImage } />
                <div className={styles.clock}>
                    <span>{formatTime()}</span>
                </div>
                <div className={styles.timeZone}>{timeZone}</div>
            </div>
        </div>
    );
}

export default DigitalClock;
