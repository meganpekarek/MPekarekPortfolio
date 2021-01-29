import '../App.css';
import React from 'react'

class SkillsGraph extends React.Component {

  render() {
    return (
        <section className="skillsGraph__wrapper">
            <div className="skillsGraph__skillNamesWrapper">
                <div className="skillsGraph__name">AdobeXD</div>
                <div className="skillsGraph__name">Miro</div>
                <div className="skillsGraph__name">Figma</div>
                <div className="skillsGraph__name">Invision</div>
                <div className="skillsGraph__name">Javascript</div>
                <div className="skillsGraph__name">HTML</div>
                <div className="skillsGraph__name">CSS</div>
                <div className="skillsGraph__name">React</div>
                <div className="skillsGraph__name">Vue</div>
            </div>
            <div className="skillsGraph__skillBarsWrapper">
                <div className="skillsGraph__bar skillsGraph__barXD"></div>
                <div className="skillsGraph__bar skillsGraph__barMiro"></div>
                <div className="skillsGraph__bar skillsGraph__barFigma"></div>
                <div className="skillsGraph__bar skillsGraph__barInvision"></div>
                <div className="skillsGraph__bar skillsGraph__barJavascript"></div>
                <div className="skillsGraph__bar skillsGraph__barHTML"></div>
                <div className="skillsGraph__bar skillsGraph__barCSS"></div>
                <div className="skillsGraph__bar skillsGraph__barReact"></div>
                <div className="skillsGraph__bar skillsGraph__barVue"></div>
            </div>
        </section>
    );
  }
}
export default SkillsGraph;