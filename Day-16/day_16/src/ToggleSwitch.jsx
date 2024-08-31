import React from 'react';

function ToggleSwitch({ toggleState }) {
    return (
        <button onClick={toggleState}>
            Toggle
        </button>
    );
}

export default ToggleSwitch;
