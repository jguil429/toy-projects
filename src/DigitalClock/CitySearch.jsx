import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import styles from './DigitalClock.module.css';


function CitySearch({ onCitySelect }) {
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);
    const apiKey = import.meta.env.VITE_IPGEOLOCATION_API_KEY;

    const handleSearch = async () => {
        try {
            // Construct the URL with query parameters directly
            const url = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&location=${city}`;
            const response = await axios.get(url);

            if (response.data) {
                const timeZone = response.data.timezone;
                onCitySelect(timeZone);
                setError(null);
            } else {
                setError('City not found. Please try again.');
            }
        } catch (err) {
            setError('City not found. Please try again.');
        }
    };

    return (
        <div>
            <input className={ styles.citySearch }
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            {/* <button onClick={ handleSearch }>Search</button> */}
            <Button onClick={ handleSearch } buttonText="Search"/>
            {error && <p>{error}</p>}
        </div>
    );
}

export default CitySearch;
