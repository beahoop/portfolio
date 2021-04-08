import {Component} from 'react';
import Resume from '../components/documents/Sarah Bea Hooper-Resume2020.jpg'

class About extends Component {
  constructor(props) {
  super(props);
  this.state = {
    rainbow: "none",
    showPhone: "hide",
    showEmail: "hide",
  }
  this.toggleRainbow = this.toggleRainbow.bind(this);
  this.togglePhone = this.togglePhone.bind(this);
  this.toggleEmail = this.toggleEmail.bind(this);
}

toggleRainbow(){
  if(this.state.rainbow === "none"){
    this.setState({rainbow: "rainbow-name"});
  }
  else if (this.state.rainbow === "rainbow-name") {
      this.setState({rainbow: "none"});
  }
}

togglePhone(){
  if(this.state.showPhone === "hide"){
    this.setState({showPhone: "show"});
  }
  else if (this.state.showPhone === "show") {
      this.setState({showPhone: "hide"});
  }
}

toggleEmail(){
  if(this.state.showEmail === "hide"){
    this.setState({showEmail: "show"});
  }
  else if (this.state.showEmail === "show") {
      this.setState({showEmail: "hide"});
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
              <div className="name col-12 col-md-6" >
                <p className="sarah">
                Sarah<br/>
                <span className="pink" onClick={this.toggleRainbow}>
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
              <p className="soical-icons">
              <i className="fas fa-envelope-square" onClick={this.toggleEmail}></i>
              <span className={this.state.showEmail}> beahoopdesign@gmail.com</span>
              <i className="fas fa-phone-square-alt" onClick={this.togglePhone}></i>
              <span className={this.state.showPhone}> (843)822-7793</span>
              <a href="https://www.linkedin.com/in/beahoopdesign/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={Resume} download>
              <i className="fas fa-caret-square-down" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></i>
              </a>

              </p>
              </div>



          </div>
        </div>
        <div className="bar"> <span className="white-bar"></span></div>
      </>
    );
  }
}

export default About;
