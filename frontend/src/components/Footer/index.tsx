import './style.css';

import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
          <strong className="text-light">&copy; 2021 - DS Vendas</strong>
          <div className="footer-icons">
            <a href="https://youtube.com/c/" target="_new">
              <YoutubeIcon />
            </a>
            <a href="https://linkedin.com/" target="_new">
              <LinkedinIcon />
            </a>
            <a href="https://instagram.com/" target="_new">
              <InstagramIcon />
            </a>
          </div>
      </div>
    </footer>
  );
}

export default Footer;