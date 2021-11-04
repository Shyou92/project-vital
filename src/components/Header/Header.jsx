import Logo from '../../images/Logo.png';
import Me from '../../images/me.jpg';

function Header() {
  return (
    <section className='header'>
      <img src={Logo} alt='logo' className='header__logo' />

      <div className='header__container'>
        <img
          src={Me}
          alt='user proto'
          className='header__container-userPhoto'
        />
        <p className='header__container-text'>Александр Витчинов</p>
      </div>
    </section>
  );
}

export default Header;
