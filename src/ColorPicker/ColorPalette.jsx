import { useState, useEffect } from 'react';
import ColorPicker from "./ColorPicker";
import styles from "./ColorPalette.module.css";

function ColorPalette() {
    const [backgroundColors, setBackgroundColors] = useState(["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]);
    const [fontColors, setFontColors] = useState(["black", "black", "black", "black", "black"]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleColorChange(index, newColor) {
        const newColors = [...backgroundColors];
        newColors[index] = newColor;
        setBackgroundColors(newColors);

        const newFontColors = [...fontColors];
        newFontColors[index] = lightOrDark(newColor) === 'light' ? 'black' : 'white';
        setFontColors(newFontColors);
    }

    function lightOrDark(color) {
        // Convert hex color to RGB
        const hex = color.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        // HSP equation from http://alienryderflex.com/hsp.html
        const hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
        );

        return hsp > 127.5 ? 'light' : 'dark';
    }

    const gradientStyle = viewportWidth <= 580
        ? {background: `linear-gradient(to bottom, ${backgroundColors.join(', ')})`}
        : {background: `linear-gradient(to right, ${backgroundColors.join(', ')})`};

    return (
        <div className={styles.mainWrapper}>
            <h1 className={styles.paletteHeader}>Choose a Color Palette:</h1>

            <div className={styles.wrapper}>
                <div className={styles.paletteContainer}>
                    <div className={styles.colorPickers}>
                        {backgroundColors.map((color, index) => (
                            <ColorPicker
                                key={index}
                                backgroundColor={color}
                                onColorChange={(newColor) => handleColorChange(index, newColor)}
                                fontColor={fontColors[index]}
                            />
                        ))}
                    </div>
                </div>

                <div className={styles.gradientContainer}>
                    <div className={styles.gradientBar} style={gradientStyle}></div>
                </div>
            </div>
        </div>
    );
}

export default ColorPalette;

