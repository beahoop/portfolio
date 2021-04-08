import {Component} from 'react';
import Rentimage from '../components/documents/rent-a-bob.png'



class Project extends Component {

  render(){
    return (

    <div className="project row p-0 mx-2">
    <a className="col-12 col-md-3 my-2 project-img" href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer">
    <img src={Rentimage} alt="..." className="img-fluid"/>
    </a>
    <a  className="col-12 col-md-3 my-2 project-img" href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer">
    <img src={Rentimage} alt="..." className="img-fluid"/>
    </a>
    <a className="col-12 col-md-3 my-2 project-img" href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer">
    <img src={Rentimage} alt="..." className="img-fluid" />
    </a>
    <a className="col-12 col-md-3 my-2 project-img" href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer">
    <img src={Rentimage} alt="..." className="img-fluid" />
    </a>
    </div>

    );
  }
}

export default Project;
