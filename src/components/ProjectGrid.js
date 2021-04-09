import {Component} from 'react';
import Rentimage from '../components/documents/rent-a-bob.png'
import footer from '../components/documents/layered-waves-haikei.png'



class Project extends Component {

  render(){
    return (

    <div className="project row p-0 m-0">
      <div  className="col-12 col-sm-6 col-md-3 my-2" >
        <div className="project-description-container">
          <p className="project-description-p">Rent-A-Bob <br/> A client facing webpage with a CMR backend. Designed
            to automate Rent-A-Bob daily task and easy customer input.</p>
        </div>
        <a href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer" className="project-a">
          <img src={Rentimage} alt="..." className="img-fluid"/>
        </a>
      </div>

      <div  className="col-12 col-sm-6 col-md-3 my-2" >
        <div className="project-description-container">
          <p className="project-description-p">Rent-A-Bob <br/> A client facing webpage with a CMR backend. Designed
            to automate Rent-A-Bob daily task and easy customer input.</p>
        </div>
        <a href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer" className="project-a">
          <img src={Rentimage} alt="..." className="img-fluid"/>
        </a>
      </div>

      <div  className="col-12 col-sm-6 col-md-3 my-2" >
        <div className="project-description-container">
          <p className="project-description-p">Rent-A-Bob <br/> A client facing webpage with a CMR backend. Designed
            to automate Rent-A-Bob daily task and easy customer input.</p>
        </div>
        <a href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer" className="project-a">
          <img src={Rentimage} alt="..." className="img-fluid"/>
        </a>
      </div>

      <div  className="col-12 col-sm-6 col-md-3 my-2" >
        <div className="project-description-container">
          <p className="project-description-p">Rent-A-Bob <br/> A client facing webpage with a CMR backend. Designed
            to automate Rent-A-Bob daily task and easy customer input.</p>
        </div>
        <a href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer" className="project-a">
          <img src={Rentimage} alt="..." className="img-fluid"/>
        </a>
      </div>

      <div className="col-12 m-0 p-0">
      <img src={footer} alt="..." className="img-fluid"/>
      </div>



    </div>

    );
  }
}

export default Project;
