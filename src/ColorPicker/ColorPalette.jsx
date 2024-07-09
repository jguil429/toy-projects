import { useState } from 'react';
import ColorPicker from "./ColorPicker";
import styles from "./ColorPalette.module.css";

function ColorPalette() {
    const [colors, setColors] = useState(["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]);

    function handleColorChange(index, newColor) {
        const newColors = [...colors];
        newColors[index] = newColor;
        setColors(newColors);
    }

    const gradientStyle = {
        background: `linear-gradient(to right, ${colors.join(', ')})`
    };

    return (
        <>
            <div className={ styles.paletteContainer }>
                <h1 className={ styles.paletteHeader }>Choose a Color Palette:</h1>
                <div className={ styles.colorPickers }>
                {colors.map((color, index) => (
                    <ColorPicker
                        key={index}
                        color={color}
                        onColorChange={(newColor) => handleColorChange(index, newColor)}
                    />
                )) }
                </div>
            </div>
            <div className={styles.gradientBar} style={gradientStyle}></div>
        </>
    );
}

export default ColorPalette;

