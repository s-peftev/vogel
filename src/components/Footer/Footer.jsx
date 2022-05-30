import s from './Footer.module.css';

function Footer() {
    return (
      <footer className={s.footer}>
        <div className={s.container}>
          <p>2022 Created by <a href='https://github.com/s-peftev/vogel'>s-peftev</a> (React learning)</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;