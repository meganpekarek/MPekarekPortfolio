import '../App.css';
import React from 'react'
import MPLogo from '../images/MPLogo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="nav__wrapper">
        <nav className="nav__itemsWrapper">
          <div className="nav__item">Home</div>
          <div className="nav__item">About Me</div>
          <div className="nav__item">Resume</div>
          <div className="nav__item">LinkedIn</div>
        </nav>
        <div className="nav__logoWrapper">
          <img className="nav__mpLogo" src={MPLogo} />
        </div>
      </section>
    );
  }
}
export default Nav;