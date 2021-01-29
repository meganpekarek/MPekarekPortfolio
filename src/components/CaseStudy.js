import '../App.css';
import React from 'react'

class CaseStudy extends React.Component {

  render() {
    return (
        <React.Fragment>
            <div className={this.props.alignRight ? "home__caseStudy home__rightAlignedCaseStudy" : "home__caseStudy home__leftAlignedCaseStudy"}>
                <img className="home_caseStudyPhoto" src={this.props.coverPhoto} alt="case-study-cover"/>
                <div className="home__caseStudyDesc">
                    {this.props.title}
                </div>
            </div>
            <div className="home__mobileCaseStudy">
                <img className="home_mobileCaseStudyPhoto" src={this.props.coverPhoto} alt="case-study-cover"/>
                <div className="home__mobileCaseStudyDesc">
                    {this.props.title}
                </div>
            </div>
        </React.Fragment>
    );
  }
}
export default CaseStudy;