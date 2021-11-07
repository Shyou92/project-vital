import { useState } from 'react';
import Avatar from '../../images/me.jpg';

function Post(props) {
  const [liked, setLiked] = useState(false);

  const likeCard = () => {
    setLiked(!liked);
  };

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
        <button
          className={`post__like ${liked ? 'post__like_isActive' : ''}`}
          type='button'
          onClick={likeCard}
        ></button>
      </div>
    </section>
  );
}

export default Post;
