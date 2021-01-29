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
        <div className={this.props.alignRight ? "home__caseStudy home__rightAlignedCaseStudy" : "home__caseStudy home__leftAlignedCaseStudy"}>
            <img className="home_caseStudyPhoto" src={this.props.coverPhoto}/>
            <div className="home__caseStudyDesc">
                {this.props.title}
            </div>
        </div>
    );
  }
}
export default CaseStudy;