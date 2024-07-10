import React from 'react';
import styles from "./ColorPicker.module.css";

function ColorPicker({ backgroundColor, onColorChange, fontColor }) {

    function handleColorChange(event) {
        onColorChange(event.target.value);
    }

    return (
        <div className={styles.colorPickerContainer}>
            <div className={styles.colorDisplay} style={{ backgroundColor: backgroundColor, color: fontColor }}>
                <p>Selected Color:<br /> {backgroundColor}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={backgroundColor} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;


