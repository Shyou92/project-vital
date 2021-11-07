import Avatar from '../../images/me.jpg';

function Post() {
  return (
    <section className='post'>
      <div className='post__header'>
        <img
          src={Avatar}
          alt='post avatar'
          className='post__avatar header__container-userPhoto'
        />
        <div className='post__creator-container'>
          <p className='post__author-name'>Alexander Vitchinov</p>
          <p className='post__creation-date'>31.10.2021</p>
        </div>
        <button className='post__deletion'></button>
      </div>
      <p className='post__text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        magni placeat nam repudiandae cumque blanditiis, perferendis ad
        voluptates hic minima atque. Itaque aliquid doloremque porro voluptatum
        iusto placeat quia a.
      </p>
      <hr className='post__line' />
      <div className='post__like-container'>
        <p className='post__number-of-likes'>100500</p>
        <button className='post__like' type='button'></button>
      </div>
    </section>
  );
}

export default Post;
