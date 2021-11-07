import Avatar from '../../images/me.jpg';

function Post(props) {
  return (
    <section className='post'>
      <div className='post__header'>
        <img
          src={Avatar}
          alt='post avatar'
          className='post__avatar header__container-userPhoto'
        />
        <div className='post__creator-container'>
          <p className='post__author-name'>{props.author}</p>
          <p className='post__creation-date'>{props.date}</p>
        </div>
        <button className='post__deletion'></button>
      </div>
      <p className='post__text'>{props.text}</p>
      <hr className='post__line' />
      <div className='post__like-container'>
        <p className='post__number-of-likes'>
          {props.numbersOfLikes === 0 ? '' : props.numbersOfLikes}
        </p>
        <button className='post__like' type='button'></button>
      </div>
    </section>
  );
}

export default Post;
