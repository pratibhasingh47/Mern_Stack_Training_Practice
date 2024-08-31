import React, { useState } from 'react';

function TextInput({ onTextChange }) {
    const [text, setText] = useState('');

    return (
        <input
            type="text"
            value={text}
            onChange={(e) => {
                setText(e.target.value);
                onTextChange(e.target.value);
            }}
        />
    );
}

export default TextInput;
