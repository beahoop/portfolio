import {Component} from 'react';
import ResumeDownload from '../components/documents/Sarah Bea Hooper-Resume2020.jpg'

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
    this.setState({showPhone: "phone-show"});
    this.setState({showEmail: "hide"})
  }
  else if (this.state.showPhone === "phone-show") {
      this.setState({showPhone: "hide"});
  }
}

toggleEmail(){
  if(this.state.showEmail === "hide"){
    this.setState({showEmail: "phone-show"});
    this.setState({showPhone: "hide"})
  }
  else if (this.state.showEmail === "phone-show") {
      this.setState({showEmail: "hide"});
  }
}

  render(){
    return (
      <>
        <div className={this.state.rainbow}>
          <div className="about row">
            <div className="col-0 col-md-6">

            </div>
              <div className="name col-12 col-md-6 " >
                <p className="sarah ml-5 ml-md-0">
                Sarah<br/>
                <span className="pink" onClick={this.toggleRainbow}>
                Bea <br/>
                Hoop</span>er
                </p>
                <p className="job-title ml-5 ml-md-0">
                  Web Development and Design
                </p>
              <div className="about-p ml-5 ml-md-0">
              Hi! I'm Sarah Bea, I've probably got dog treats in my pockets and a coffee mug in my hand.
              I've got an eye for design and a passion for coding. If you are in the need for either, let's chat!</div>
              <p className="soical-icons row m-0 ml-5 ml-md-0">
              <i className="fas fa-envelope-square" onClick={this.toggleEmail}></i>
              <span className={this.state.showEmail}> beahoopdesign@gmail.com</span>
              <i className="fas fa-phone-square-alt" onClick={this.togglePhone}></i>
              <span className="phone">
              <span className={this.state.showPhone}> (843)822-7793</span>
              </span>
              <a href="https://github.com/beahoop" target="_blank" rel="noreferrer">
                <i class="fab fa-github-square"></i>
              </a>

              <a href="https://www.linkedin.com/in/beahoopdesign/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <span className="resume-btn" onClick={this.toggleResume}>Resume</span>
              </p>
              </div>
          </div>
        </div>
        <div className="bar mt-4"> <span className="white-bar"></span></div>
        <div className="row resume-show">
          <div  className={this.state.showResume}>
            <div className="col">
            <a href={ResumeDownload} className="resume-btn" download> Download
          </a>
          </div>
            <img src="https://i.imgur.com/nLipLa7.jpg" alt="..." className="col-10 mx-8 resume-paper"/>
          </div>
        </div>
      </>
    );
  }
}


// <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//   <path fill="#D295BD" d="M36.1,-66.8C46,-56.8,52.6,-45.5,57.5,-34.2C62.4,-22.8,65.7,-11.4,67.4,1C69.2,13.4,69.5,26.9,62.1,33.9C54.7,41,39.6,41.8,28,44.6C16.4,47.4,8.2,52.4,-0.9,53.9C-9.9,55.4,-19.9,53.6,-32.1,51.1C-44.3,48.6,-58.8,45.4,-68.8,36.8C-78.8,28.2,-84.3,14.1,-78.6,3.3C-72.9,-7.5,-55.9,-15,-47.2,-25.8C-38.4,-36.6,-37.9,-50.7,-31.4,-62.7C-25,-74.6,-12.5,-84.4,0.3,-85C13.1,-85.5,26.2,-76.8,36.1,-66.8Z" transform="translate(100 100)" />
// </svg>

export default About;
