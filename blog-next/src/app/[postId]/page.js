import Comments from "@/app/components/Comments";

async function fetchPostData(postId) {
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await postResponse.json();

  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );
  const user = await userResponse.json();

  // const commentsResponse = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  // );
  // const comments = await commentsResponse.json();

  return {
    post,
    user,
    // comments,
  };
}

export default async function Post({ params }) {
  const { postId } = params;
  const { post, user } = await fetchPostData(postId);

  return (
    <div>
      <h2>{post.title}</h2>
      <h4>
        ✍️ Escrito por {user.name} ({user.email})
      </h4>
      <p>{post.body}</p>
      <hr />
      <h3>💬 Comentarios</h3>
      <Comments postId={postId} />
      {/* <ul>
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
      </ul> */}
    </div>
  );
}
