import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className='footer'>
      <p className='footer__bugtracker'>
        Нашли баг? Или фичу? Пишите в <Link to='/bugtracker'>Багтрекер</Link>
      </p>

      <div className='footer__container'>
        <ul className='footer__info'>
          <li className='footer__info-item'>Создатель: Александр Витчинов</li>
          <li className='footer__info-item'>+7 978 888 25 20</li>
          <li className='footer__info-item'>
            Все вопросы по адресу: alexvitch92@gmail.com
          </li>
          <li className='footer__info-item'>2021 &#169;</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
