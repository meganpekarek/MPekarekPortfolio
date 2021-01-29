import '../App.css';
import React from 'react'
import SkillsChart from '../images/SkillsChart.png'
import SkillsGraph from '../components/SkillsGraph'

class AboutMe extends React.Component {

  render() {

    return (
        <React.Fragment>
            <section className="home__skillsWrapper">
                <h3>My Skills</h3>
                <div className="home__skillsChartWrapper">
                    <img className="home__skillsChart" src={SkillsChart} alt="skills-chart" />
                </div>
                <SkillsGraph />
            </section>
        </React.Fragment>
    );
  }
}
export default AboutMe;