import Avatar from '../../images/me.jpg';

function User() {
  return (
    <section className='user'>
      <img src={Avatar} alt="user's avatar" className='user__avatar' />
      <div className='user-info'>
        <div className='user-info__naming'>
          <p className='user-info__name user-info__whitespace'>Александр</p>
          <p className='user-info__sirname'>Витчинов</p>
        </div>
        <hr />
        <div className='user-info__bio'>
          <div className='user__container'>
            <p className='user-info__birthday user-info__whitespace'>
              Дата рождения:
            </p>
            <p className='user-info__date'>15.10.1992</p>
          </div>
          <div className='user__container'>
            <p className='user-info__country user-info__whitespace'>
              Страна проживания:
            </p>
            <p className='user-info__country-name'>Россия</p>
          </div>
          <div className='user__container'>
            <p className='user-info__city user-info__whitespace'>Город:</p>
            <p className='user-info__city-name'>Севастополь</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;
