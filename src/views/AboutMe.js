import "../App.css";
import React from "react";
import SkillsChart from "../images/SkillsChart.png";
import SkillsGraph from "../components/SkillsGraph";

class AboutMe extends React.Component {

  render() {
    return (
      <React.Fragment>
        <section className="aboutMe__headerSection">
          <div>
            <div className="aboutMe__infoWrapper">
              <h3>Why I Love Design</h3>
              <span className="aboutMe__infoContent">Psychology has always been an interest to me, so UX design has been the perfect crossover between my love for software and desire to learn about the way people function.</span>
            </div>
            <div className="aboutMe__infoWrapper">
              <h3>Why I Love Development</h3>
              <span className="aboutMe__infoContent">Problem solving is what I live for. I love being a part of answering the “how do we bring these designs to life?” question. </span>
            </div>
          </div>
          <img
            className="aboutMe__skillsChart"
            src={SkillsChart}
            alt="skills-chart"
          />
        </section>
        <section className="aboutMe__skillsWrapper">
          <h3>My Skills</h3>
          <SkillsGraph />
        </section>
      </React.Fragment>
    );
  }
}
export default AboutMe;
