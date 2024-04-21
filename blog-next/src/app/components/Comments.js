"use client";

import { useState, useEffect } from "react";

export default function Comments({ postId }) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((comments) => {
        setComments(comments);
        setLoading(false);
      });
  }, [postId]);

  if (loading) {
    return <p>Cargando comentarios...</p>;
  }

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>
            Escrito por <strong>{comment.email}</strong>
          </p>
          <p>
            <em>{comment.body}</em>
          </p>
        </li>
      ))}
    </ul>
  );
}
