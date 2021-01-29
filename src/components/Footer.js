import '../App.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

class Footer extends React.Component {

  render() {
    return (
      <section className="footer__wrapper">
          <span className="footer__item"><FontAwesomeIcon icon={faAddressCard} /> Contact Me</span>
          <span className="footer__copywrite">Copywrite 2020</span>
      </section>
    );
  }
}
export default Footer;