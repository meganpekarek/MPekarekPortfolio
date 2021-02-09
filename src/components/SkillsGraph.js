import '../App.css';
import React from 'react'

class SkillsGraph extends React.Component {
  constructor(props) {
    super(props);
    this.barGraph = React.createRef();
    this.state = {
      animateBar: false
    };
  }

  handleScroll = () => {
    const top = this.barGraph.current.getBoundingClientRect().top;
    if(top <= 700){
        console.log("Element is in view or above the viewport");
        this.setState({
          animateBar: true
        })
    }else{
        console.log("Element is outside view");
        this.setState({
          animateBar: false
        })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
        <section className="skillsGraph__wrapper" ref={this.barGraph}>
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
                <div className={this.state.animateBar ? " skillsGraph__bar skillsGraph__barXD skillsGraph__barAnimate" : "skillsGraph__bar"}></div>
                <div className={this.state.animateBar ? " skillsGraph__bar skillsGraph__barMiro skillsGraph__barAnimate" : "skillsGraph__bar"}></div>
                <div className={this.state.animateBar ? " skillsGraph__bar skillsGraph__barFigma skillsGraph__barAnimate" : "skillsGraph__bar"}></div>
                <div className={this.state.animateBar ? " skillsGraph__bar skillsGraph__barInvision skillsGraph__barAnimate" : "skillsGraph__bar"}></div>
                <div className={this.state.animateBar ? " skillsGraph__bar skillsGraph__barJavascript skillsGraph__barAnimate" : "skillsGraph__bar"}></div>
                <div className={this.state.animateBar ? " skillsGraph__bar skillsGraph__barHTML skillsGraph__barAnimate" : "skillsGraph__bar"}></div>
                <div className={this.state.animateBar ? " skillsGraph__bar skillsGraph__barCSS skillsGraph__barAnimate" : "skillsGraph__bar"}></div>
                <div className={this.state.animateBar ? " skillsGraph__bar skillsGraph__barReact skillsGraph__barAnimate" : "skillsGraph__bar"}></div>
                <div className={this.state.animateBar ? " skillsGraph__bar skillsGraph__barVue skillsGraph__barAnimate" : "skillsGraph__bar"}></div>
            </div>
        </section>
    );
  }
}
export default SkillsGraph;