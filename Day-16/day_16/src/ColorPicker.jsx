import React from 'react';

function ColorPicker({ onColorChange }) {
    return (
        <input
            type="color"
            onChange={(e) => onColorChange(e.target.value)}
        />
    );
}

export default ColorPicker;
