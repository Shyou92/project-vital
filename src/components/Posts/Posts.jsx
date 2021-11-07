import Post from '../Post/Post';
import posts from '../../utils/post';

function Posts() {
  return (
    <section className='posts'>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            date={post.date}
            text={post.text}
            author={post.author}
            numbersOfLikes={post.numbersOfLikes}
          />
        );
      })}
    </section>
  );
}

export default Posts;
