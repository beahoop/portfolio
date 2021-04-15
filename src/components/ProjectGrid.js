import {Component} from 'react';
import Rentimage from '../components/documents/rent-a-bob.png'
import Batchimage from '../components/documents/batchimage.png'
import Dobra from '../components/documents/dobra.png'
import Turnbaseimage from '../components/documents/turnbasegame.png'
import Github from '../components/documents/github.png'
import Octacats from '../components/documents/octacats.png'
// import footer from '../components/documents/layered-waves-haikei.png'



class Project extends Component {

  render(){
    return (

    <div className="row mx-auto">

  <a href="https://rent-a-bob.herokuapp.com/" target="_blank" rel="noreferrer">
    <div class="flip-card m-2">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={Rentimage} alt="Rent-a-bob" className="preview-image"/>
        </div>
        <div class="flip-card-back">
          <p className="flip-title">RENT-A-BOB</p>
          <p className="flip-description"> A client facing webpage with a CMR backend. Designed
                to automate Rent-A-Bob daily task and easy customer input.
             </p>
        </div>
      </div>
    </div>
  </a>


    <a href="https://django-batch-maker-beahoop.herokuapp.com/" target="_blank" rel="noreferrer">
    <div class="flip-card m-2">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={Batchimage} alt="Rent-a-bob" className="preview-image"/>
        </div>
        <div class="flip-card-back">
          <p className="flip-title">The Pie Chart</p>
          <p className="flip-description">This page show cases my abilities to create full C.R.U.D and user profiles.
          Admin abilities and client's who aren't logged in abilities.</p>

        </div>
      </div>
    </div>
  </a>

    <a href="https://beahoop.github.io/React-Menu-App/" target="_blank" rel="noreferrer">
    <div class="flip-card m-2">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={Dobra} alt="Rent-a-bob" className="preview-image"/>
        </div>
        <div class="flip-card-back">
          <p className="flip-title">Dobra To-Go</p>
          <p className="flip-description">A local tea shop, Dobra serves food but only has to go food by phone.
          This page severs as preview to solve this issue. </p>
        </div>
      </div>
    </div>
  </a>

    <a href="https://stevenschwengel.github.io/turnbasegame/" target="_blank" rel="noreferrer" >
    <div class="flip-card m-2">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={Turnbaseimage} alt="Rent-a-bob" className="preview-image"/>
      </div>
        <div class="flip-card-back">
          <p className="flip-title">Ship Invaders </p>
          <p className="flip-description">A fun turn-based game to represented my ablites with javascript. </p>

        </div>
      </div>
    </div>
  </a>

    <a href="https://beahoop.github.io/Github-Recreation/" target="_blank" rel="noreferrer">
    <div class="flip-card m-2">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={Github} alt="Rent-a-bob" className="preview-image"/>
        </div>
        <div class="flip-card-back">
          <p className="flip-title">Github Recreation</p>
          <p className="flip-description">Showing my abilities to reproduce webpages with wireframes.</p>

        </div>
      </div>
    </div>
  </a>


    <a href="https://beahoop.github.io/octocats/" target="_blank" rel="noreferrer">
    <div class="flip-card m-2">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src={Octacats} alt="Rent-a-bob" className="preview-image"/>
      </div>
        <div class="flip-card-back">
          <p className="flip-title">Responive Octacat Feed</p>
          <p className="flip-description">Showing off my albitly to create responive feeds. Click round :].</p>
        </div>
      </div>
    </div>
    </a>

    </div>

    );
  }
}

export default Project;
