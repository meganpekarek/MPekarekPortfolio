import '../App.css';
import React from 'react'
import MPLogo from '../images/MPLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  toggleMenu(val) {
    this.setState({
      menuOpen: val
    })
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <React.Fragment>
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
        <section className="nav__hamburgerClosedWrapper">
          <FontAwesomeIcon className="nav__hamburgerNavIcon" icon={faBars} onClick={() => this.toggleMenu(true)} />
          <img className="nav__hamburgerNavLogo" src={MPLogo} />
        </section>
        <section className={"nav__hamburgerOpenWrapper" + (menuOpen ? " openNav" : "")}>
            <div className="nav__hamburgerOpenTopWrapper">
              <FontAwesomeIcon className="nav__hamburgerNavIcon" icon={faTimes}  onClick={() => this.toggleMenu(false)} />
            </div>
            <nav className="nav__hamburgerItemsWrapper">
              <div className="nav__hamburgerItem">Home</div>
              <div className="nav__hamburgerItem">About Me</div>
              <div className="nav__hamburgerItem">Resume</div>
              <div className="nav__hamburgerItem">LinkedIn</div>
            </nav>
        </section>
    </React.Fragment>
    )
  }
}
export default Nav;