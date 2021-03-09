import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>email: {email}</p>
        </div>
    );
};

export default Comment;