import "../App.css";
import React from "react";
import NSACoverPhoto from "../images/NSACoverPhoto.png";
import SheCanicCoverPhoto from "../images/GreySheCanicCoverPhoto.png";
import CGCoverPhoto from "../images/CGCoverPhoto.png";
import CaseStudy from "../components/CaseStudy";
import CGCaseStudy from '../images/CGCaseStudy.png'
import SheCanicCaseStudy from '../images/SheCanicCaseStudy.png'
import NSACaseStudy from '../images/NSACaseStudy.png'
// import { Jumbotron, Button, Nav } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <section className="home__headerContent">
          <div className="home__titleSection">
            <h1 className="home__header">Megan Pekarek</h1>
            <div className="home__subheaderWrapper">
              <h3 className="home__subheader home__leftSubheader">Developer</h3>
              <div className="home__subheaderSeparator"></div>
              <h3 className="home__subheader home__rightSubheader">Designer</h3>
            </div>
          </div>
        </section>
        <section className="home__uxWorkWrapper">
          <h3>My UX/UI Work</h3>
          <div className="home__uxWorkCaseStudies">
            <CaseStudy
              title="Common Ground Meditation Center Website Redesign Prototype"
              coverPhoto={CGCoverPhoto}
              caseStudyImg={CGCaseStudy}
            />
            <CaseStudy
              title="SheCanic Vehicle Maintenance Mobile App Prototype"
              alignRight={true}
              coverPhoto={SheCanicCoverPhoto}
              caseStudyImg={SheCanicCaseStudy}
            />
            <CaseStudy
              title="NSA Website Redesign Prototype"
              coverPhoto={NSACoverPhoto}
              caseStudyImg={NSACaseStudy}
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Home;
