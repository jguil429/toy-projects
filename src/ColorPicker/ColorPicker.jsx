import React from 'react';
import styles from "./ColorPicker.module.css";

function ColorPicker({ color, onColorChange }) {

    function handleColorChange(event) {
        onColorChange(event.target.value);
    }

    return (
        <div className={styles.colorPickerContainer}>
            <div className={styles.colorDisplay} style={{ backgroundColor: color }}>
                <p>Selected Color:<br /> {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;


