import {Component} from 'react';
import ResumeDownload from '../components/documents/Sarah Bea Hooper-Resume2020.jpg'
import Resume from '../components/Resume';

class About extends Component {
  constructor(props) {
  super(props);
  this.state = {
    rainbow: "none",
    showPhone: "hide",
    showEmail: "hide",
    showResume: "hide",
  }
  this.toggleRainbow = this.toggleRainbow.bind(this);
  this.togglePhone = this.togglePhone.bind(this);
  this.toggleEmail = this.toggleEmail.bind(this);
  this.toggleResume = this.toggleResume.bind(this);
}

toggleRainbow(){
  if(this.state.rainbow === "none"){
    this.setState({rainbow: "rainbow-name"});
  }
  else if (this.state.rainbow === "rainbow-name") {
      this.setState({rainbow: "none"});
  }
}
toggleResume(){
  if(this.state.showResume === "hide"){
    this.setState({showResume: "show"});
  }
  else if (this.state.showResume === "show") {
      this.setState({showResume: "hide"});
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
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#D295BD" d="M36.1,-66.8C46,-56.8,52.6,-45.5,57.5,-34.2C62.4,-22.8,65.7,-11.4,67.4,1C69.2,13.4,69.5,26.9,62.1,33.9C54.7,41,39.6,41.8,28,44.6C16.4,47.4,8.2,52.4,-0.9,53.9C-9.9,55.4,-19.9,53.6,-32.1,51.1C-44.3,48.6,-58.8,45.4,-68.8,36.8C-78.8,28.2,-84.3,14.1,-78.6,3.3C-72.9,-7.5,-55.9,-15,-47.2,-25.8C-38.4,-36.6,-37.9,-50.7,-31.4,-62.7C-25,-74.6,-12.5,-84.4,0.3,-85C13.1,-85.5,26.2,-76.8,36.1,-66.8Z" transform="translate(100 100)" />
            </svg>

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
                I guess I'm pretty cool, I like looking different and acting kind.
                Photo on the left, text on the right with contact links
              </div>
              <p className="soical-icons row m-0">
              <i className="fas fa-envelope-square" onClick={this.toggleEmail}></i>
              <span className={this.state.showEmail}> beahoopdesign@gmail.com</span>
              <i className="fas fa-phone-square-alt" onClick={this.togglePhone}></i>
              <span className={this.state.showPhone}> (843)822-7793</span>
              <a href="https://www.linkedin.com/in/beahoopdesign/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <span className="resume-btn" onClick={this.toggleResume}>Resume</span>
              </p>
              </div>
          </div>
        </div>
        <div className="bar"> <span className="white-bar"></span></div>
        <div className="row resume-show">
          <div  className={this.state.showResume}>
            <div className="col-10">
            <a href={ResumeDownload}  download> Download
            <i className="fas fa-caret-square-down" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></i>
            </a>
          </div>
            <img src="https://i.imgur.com/nLipLa7.jpg" alt="..." className="col-10 mx-8 resume-paper"/>
          </div>
        </div>
      </>
    );
  }
}

export default About;
