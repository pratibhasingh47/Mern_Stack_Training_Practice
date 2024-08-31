import React, { useState } from 'react';

function LikeButton({ likeCount }) {
    const [likes, setLikes] = useState(likeCount);

    return (
        <button onClick={() => setLikes(likes + 1)}>
            Likes: {likes}
        </button>
    );
}

export default LikeButton;
