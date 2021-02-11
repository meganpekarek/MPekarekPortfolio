import "../App.css";
import React from "react";
import history from "../history";

class CaseStudy extends React.Component {
  goToRoute = (path) => {
    history.push({
        pathname: path,
        state: {
          caseStudyImg: this.props.caseStudyImg
        }
      });
  };

  render() {
    return (
      <div onClick={() => this.goToRoute("/case-study-page")}>
        <div
          className={
            this.props.alignRight
              ? "home__caseStudy home__rightAlignedCaseStudy"
              : "home__caseStudy home__leftAlignedCaseStudy"
          }
        >
          <img
            className="home_caseStudyPhoto"
            src={this.props.coverPhoto}
            alt="case-study-cover"
          />
          <div className="home__caseStudyDesc">{this.props.title}</div>
        </div>
        <div className="home__mobileCaseStudy">
          <img
            className="home__mobileCaseStudyPhoto"
            src={this.props.coverPhoto}
            alt="case-study-cover"
          />
          <div className="home__mobileCaseStudyDesc">{this.props.title}</div>
        </div>
      </div>
    );
  }
}
export default CaseStudy;
