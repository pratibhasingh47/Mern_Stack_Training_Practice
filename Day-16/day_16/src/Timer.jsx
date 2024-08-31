import React, { useState } from 'react';

function Timer({ start }) {
    const [time, setTime] = useState(start);

    return <div>Time: {time} seconds</div>;
}

export default Timer;
