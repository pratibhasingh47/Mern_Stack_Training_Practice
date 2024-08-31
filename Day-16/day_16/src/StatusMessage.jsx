import React from 'react';

function StatusMessage({ status }) {
    return (
        <div>
            {status === 'success' && <p>Operation was successful</p>}
            {status === 'error' && <p>There was an error</p>}
        </div>
    );
}

export default StatusMessage;
