import '../App.css';
import React from 'react'
import NSACoverPhoto from '../images/NSACoverPhoto.png'
import SheCanicCoverPhoto from '../images/SheCanicCoverPhoto.png'
import CGCoverPhoto from '../images/CGCoverPhoto.png'
import SkillsGraph from '../images/SkillsGraph.png'
import SkillsChart from '../images/SkillsChart.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // const CaseStudies = () => (
    //     <div>case</div>
    // );

    return (
        <React.Fragment>
            <section className="home__wrapper">
                <div className="home__headerContent">
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
                </div>
            </section>
            <section className="home__uxWorkWrapper">
                <h3>My UX/UI Work</h3>
                <div className="home__uxWorkCaseStudies">
                    <div className="home__caseStudy home__leftAlignedCaseStudy">
                        <img className="home_caseStudyPhoto" src={CGCoverPhoto}/>
                        <div className="home__caseStudyDesc">
                            Common Ground Meditation Center Website Redesign Prototype
                        </div>
                    </div>
                    <div className="home__caseStudy home__rightAlignedCaseStudy">
                        {/* <img className="home_caseStudyPhoto" src={SheCanicCoverPhoto}/> */}
                        <div className="home__caseStudyDesc">
                            SheCanic Vehicle Maintenance Mobile App Prototype
                        </div>
                        <img className="home_caseStudyPhoto" src={SheCanicCoverPhoto}/>
                    </div>
                    <div className="home__caseStudy home__leftAlignedCaseStudy">
                        <img className="home_caseStudyPhoto" src={NSACoverPhoto}/>
                        <div className="home__caseStudyDesc">
                            <span>NSA Website Redesign Prototype</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home__skillsWrapper">
                <h3>My Skills</h3>
                <div className="home__skillsChartWrapper">
                    <img className="home__skillsChart" src={SkillsChart} />
                </div>
                <img className="home__skillsGraph" src={SkillsGraph} />
            </section>
        </React.Fragment>
    );
  }
}
export default Home;