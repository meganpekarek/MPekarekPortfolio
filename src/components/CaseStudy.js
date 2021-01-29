import '../App.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

class CaseStudy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <React.Fragment>
            <div className={this.props.alignRight ? "home__caseStudy home__rightAlignedCaseStudy" : "home__caseStudy home__leftAlignedCaseStudy"}>
                <img className="home_caseStudyPhoto" src={this.props.coverPhoto}/>
                <div className="home__caseStudyDesc">
                    {this.props.title}
                </div>
            </div>
            <div className="home__mobileCaseStudy">
                <img className="home_mobileCaseStudyPhoto" src={this.props.coverPhoto}/>
                <div className="home__mobileCaseStudyDesc">
                    {this.props.title}
                </div>
            </div>
        </React.Fragment>
    );
  }
}
export default CaseStudy;