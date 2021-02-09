import "../App.css";
import React from "react";
import ResumeImg from "../images/UXUIResumeColorUpdate.svg";
import ResumePdf from "../images/MeganPekarekResume.pdf"

class Resume extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="resume__wrapper">
          <img
            className="resume__img"
            src={ResumeImg}
            alt="megan pekarek's resume"
          />
          <a className="resume__downloadBtn" href={ResumePdf} download="MeganPekarekResume">Download</a>
        </section>
      </React.Fragment>
    );
  }
}
export default Resume;
