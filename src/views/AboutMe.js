import '../App.css';
import React from 'react'
import SkillsGraph from '../images/SkillsGraph.png'
import SkillsChart from '../images/SkillsChart.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom, faUsers } from '@fortawesome/free-solid-svg-icons'

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <React.Fragment>
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
export default AboutMe;