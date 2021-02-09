import '../App.css';
import React from 'react'
import MPLogo from '../images/MPLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import history from "../history";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      activeRoute: '/home'
    }
  }

  toggleMenu(val) {
    this.setState({
      menuOpen: val
    })
  }

  goToRoute(path) {
    history.push(path);
    this.setState({
      menuOpen: false,
      activeRoute: path
    });
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <React.Fragment>
        <section className="nav__wrapper">
          <nav className="nav__itemsWrapper">
            <div className={`nav__item ${this.state.activeRoute === "/home" ? "nav__activeItem" : ""}`} onClick={() => this.goToRoute('/home')}>Home</div>
            <div className={`nav__item ${this.state.activeRoute === "/aboutme" ? "nav__activeItem" : ""}`} onClick={() => this.goToRoute('/aboutme')}>About Me</div>
            <div className={`nav__item ${this.state.activeRoute === "/resume" ? "nav__activeItem" : ""}`} onClick={() => this.goToRoute('/resume')}>Resume</div>
            <div className="nav__item"><a className="nav__linkedInLink" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/megan-pekarek-928813111/">LinkedIn</a></div>
          </nav>
          <div className="nav__logoWrapper">
            <img className="nav__mpLogo" src={MPLogo} alt="desktop-logo" />
          </div>
        </section>
        <section className="nav__hamburgerClosedWrapper">
          <FontAwesomeIcon className="nav__hamburgerNavIcon" icon={faBars} onClick={() => this.toggleMenu(true)} />
          <img className="nav__hamburgerNavLogo" src={MPLogo} alt="mobile-logo" />
        </section>
        <section className={"nav__hamburgerOpenWrapper" + (menuOpen ? " openNav" : "")}>
            <div className="nav__hamburgerOpenTopWrapper">
              <FontAwesomeIcon className="nav__hamburgerNavIcon" icon={faTimes}  onClick={() => this.toggleMenu(false)} />
            </div>
            <nav className="nav__hamburgerItemsWrapper">
              <div className="nav__hamburgerItem" onClick={() => this.goToRoute('/home')}>Home</div>
              <div className="nav__hamburgerItem" onClick={() => this.goToRoute('/aboutme')}>About Me</div>
              <div className="nav__hamburgerItem">Resume</div>
              <div className="nav__hamburgerItem">LinkedIn</div>
            </nav>
        </section>
    </React.Fragment>
    )
  }
}
export default Nav;