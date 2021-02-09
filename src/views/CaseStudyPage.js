import "../App.css";
import React from "react";

class CaseStudyPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <section className="caseStudyPage__wrapper">
          <img
            className="caseStudyPage__img"
            src={this.props.location.state.caseStudyImg}
            alt="case study"
          />
        </section>
      </React.Fragment>
    );
  }
}
export default CaseStudyPage;
