import React, { useState } from 'react';
import styles from "./ColorPicker.module.css";

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (<div className={styles.colorpickercontainer}>
        <h1>Color Picker</h1>
        <div className={styles.colordisplay} style={ { backgroundColor: color } }>
            <p>Selected Color; { color }</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>)
}

export default ColorPicker