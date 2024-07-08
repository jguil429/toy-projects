import React, { useState } from 'react';
import axios from 'axios';
import Button from '../Button/Button';
import styles from './DigitalClock.module.css';

function CitySearch({ onCitySelect, onBackgroundImageUpdate }) {
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);
    const ipGeolocationApiKey = import.meta.env.VITE_IPGEOLOCATION_API_KEY;
    const unsplashApiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

    const handleSearch = async () => {
        try {
            // Fetch timezone data
            const url = `https://api.ipgeolocation.io/timezone?apiKey=${ipGeolocationApiKey}&location=${city}`;
            const response = await axios.get(url);

            if (response.data) {
                const timeZone = response.data.timezone;
                onCitySelect(timeZone);
                setError(null);

                // Fetch background image
                const unsplashUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashApiKey}`;
                const imageResponse = await axios.get(unsplashUrl);
                const imageUrl = imageResponse.data.results[0]?.urls?.regular;
                onBackgroundImageUpdate(imageUrl || '');
            } else {
                setError('City not found. Please try again.');
            }
        } catch (err) {
            setError('City not found. Please try again.');
        }
    };

    return (
        <div>
            <input className={styles.citySearch}
                   type="text"
                   value={city}
                   onChange={(e) => setCity(e.target.value)}
                   placeholder="Enter city name"
            />
            <Button onClick={handleSearch} buttonText="Search" />
            {/*{error && <p>{error}</p>}*/}
        </div>
    );
}

export default CitySearch;
