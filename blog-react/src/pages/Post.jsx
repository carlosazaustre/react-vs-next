import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchPostData(postId) {
      try {
        setLoading(true);
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const postData = await postResponse.json();

        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        );
        const userData = await userResponse.json();

        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        const commentsData = await commentsResponse.json();

        setPost(postData);
        setUser(userData);
        setComments(commentsData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPostData(postId);
  }, [postId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <h4>
        ✍️ Escrito por {user.name} ({user.email})
      </h4>
      <p>{post.body}</p>
      <hr />
      <h3>💬 Comentarios</h3>
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
    </div>
  );
}
