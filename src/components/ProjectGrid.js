import {Component} from 'react';
import Rentimage from '../components/documents/rent-a-bob.png'



class Project extends Component {

  render(){
    return (

    <div className="project row p-0 mx-2">
      <div  className="col-12 col-md-3 my-2 project-img" >
        <div className="project-description-container">
        <div className="project-description col-11">
        </div>
          <p className="project-description-p">Rent-A-Bob <br/> A client facing webpage with a CMR backend. Designed
            to automate Rent-A-Bob daily task and easy customer input.</p>
        </div>
        <a href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer">
      <img src={Rentimage} alt="..." className="img-fluid"/>
      </a>
    </div>


    <div  className="col-12 col-md-3 my-2 project-img" >
      <div className="project-description-container">
        <div className="project-description col-11">
        </div>
          <p className="project-description-p">These are words</p>
        </div>
        <a href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer">
      <img src={Rentimage} alt="..." className="img-fluid"/>
      </a>
    </div>

    <div  className="col-12 col-md-3 my-2 project-img" >
      <div className="project-description-container">
        <div className="project-description col-11">
        </div>
          <p className="project-description-p">These are words</p>
        </div>
        <a href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer">
      <img src={Rentimage} alt="..." className="img-fluid"/>
      </a>
    </div>

    <div  className="col-12 col-md-3 my-2 project-img" >
      <div className="project-description-container">
        <div className="project-description col-11">
        </div>
          <p className="project-description-p">These are words</p>
        </div>
        <a href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer">
      <img src={Rentimage} alt="..." className="img-fluid"/>
      </a>
    </div>
    </div>

    );
  }
}

export default Project;
