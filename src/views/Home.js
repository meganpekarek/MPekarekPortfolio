import '../App.css';
import React from 'react'
import NSACoverPhoto from '../images/NSACoverPhoto.png'
import SheCanicCoverPhoto from '../images/SheCanicCoverPhoto.png'
import CGCoverPhoto from '../images/CGCoverPhoto.png'
import CaseStudy from '../components/CaseStudy'

class Home extends React.Component {

  render() {

    return (
        <React.Fragment>
            <section className="home__headerContent">
                <div className="home__titleSection">
                    <h1 className="home__header">Megan Pekarek</h1>
                    <h3 className="home__subheader">Front End Developer and UX/UI Designer</h3>
                </div>
                <div className="home__infoSection">
                    <div className="home__careerInfo">
                        <h3>&lt; Developer /&gt;</h3>
                        <div className="home__headerDesc">
                        My journey into the world of software started with my degree in Computer Science. I quickly realized that front end development is where it’s at. Bringing beautiful designs to life never gets old.
                        </div>
                    </div>
                    <div className="home__careerInfo">
                        <h3>Designer</h3>
                        <div className="home__headerDesc">
                        I love making pretty things, but what I am most passionate about is user research and testing. I want to know what my users want and why they want it. 
                        </div>
                    </div>
                </div>
            </section>
            <section className="home__uxWorkWrapper">
                <h3>My UX/UI Work</h3>
                <div className="home__uxWorkCaseStudies">
                    <CaseStudy title="Common Ground Meditation Center Website Redesign Prototype" coverPhoto={CGCoverPhoto} />
                    <CaseStudy title="SheCanic Vehicle Maintenance Mobile App Prototype" alignRight={true} coverPhoto={SheCanicCoverPhoto} />
                    <CaseStudy title="NSA Website Redesign Prototype" coverPhoto={NSACoverPhoto} />
                </div>
            </section>
        </React.Fragment>
    );
  }
}
export default Home;