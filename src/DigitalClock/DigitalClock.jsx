import React, { useState, useEffect } from 'react';
import styles from './DigitalClock.module.css';

function DigitalClock({ timeZone }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
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
        <div className={styles.clockcontainer}>
            <div className={styles.clock}>
                <span>{formatTime()}</span>
            </div>
            <div>{timeZone}</div>
        </div>
    )
}

export default DigitalClock;