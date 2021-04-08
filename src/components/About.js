import {Component} from 'react';


class About extends Component {
  constructor(props) {
  super(props);
  this.state = {
    rainbow: "none",

  }
  this.toggleRainbow = this.toggleRainbow.bind(this);
}

toggleRainbow(){
  if(this.state.rainbow === "none"){
    this.setState({rainbow: "rainbow-name"});
  }
  else if (this.state.rainbow === "rainbow-name") {
      this.setState({rainbow: "none"});
  }
}

  render(){
    return (
      <>
        <div className={this.state.rainbow}>
          <div className="about row">
            <div className="col-0 col-md-6">
            This is where the pic goes
            </div>
              <div className="name col-12 col-md-6" onClick={this.toggleRainbow}>
                <p className="sarah">
                Sarah<br/>
                <span className="pink">
                Bea <br/>
                Hoop</span>er
                </p>
                <p className="job-title">
                  Web Development and Design
                </p>
              <div className="about-p">
                This is just me talking about me and telling you some more stuff about myself.
                I'm pretty cool, I like looking different and acting kind.
                Photo on the left, text on the right with contact links
              </div>
              </div>
          </div>
        </div>
        <div className="bar"> <span className="white-bar"></span></div>
      </>
    );
  }
}

export default About;
