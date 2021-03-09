import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setcomments] = useState([]);
    
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch (url)
        .then(res => res.json())
        .then(data => setcomments(data))
    },[])

    return (
        <div>
            <h3>This is PostDetail: {id}</h3>
            <p>User posted: {post.id}</p>
            <p>Number of comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment = {comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;