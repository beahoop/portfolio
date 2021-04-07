import {Component} from 'react';


class Resume extends Component {
  constructor(props) {
  super(props);
  this.state = {
    show: "hide",

  }
  this.toggleShow = this.toggleShow.bind(this);
}

toggleShow(){
  if(this.state.show === "hide"){
    this.setState({show: "show"});
  }
  else if (this.state.show === "show") {
      this.setState({show: "hide"});
  }
}

  render(){
    return (

    <div className="resume row">
    Add a button that says view resume
    let the resume slide in
    think about adding the resume in a different way than a paper resume
    <button className="col-12 col-md-6 mx-auto btn resume-btn" onClick={this.toggleShow}>View Resume</button>
      <div  className={this.state.show}>
        <img src="https://i.imgur.com/nLipLa7.jpg" alt="..." className="col"/>
      </div>
    </div>

    );
  }
}

export default Resume;
