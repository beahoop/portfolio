import {Component} from 'react';
import About from "./components/About";
import Project from "./components/ProjectGrid";
import Resume from "./components/Resume";
import footer from '../src/components/documents/layered-waves-haikei.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    clickedId: null,
    recipes: [],
    recipeImage: null,
    preview: "",
    showPhone: "hide",
    showEmail: "hide",
    showResume: "hide",
  }

this.addRecipe = this.addRecipe.bind(this);
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
  this.setState({showPhone: "phone-show-footer"});
  this.setState({showEmail: "hide"})
}
else if (this.state.showPhone === "phone-show-footer") {
    this.setState({showPhone: "hide"});
}
}

toggleEmail(){
if(this.state.showEmail === "hide"){
  this.setState({showEmail: "phone-show-footer"})
  this.setState({showPhone: "hide"})
}
else if (this.state.showEmail === "phone-show-footer") {
    this.setState({showEmail: "hide"});
}

}


addRecipe(recipe){
  const recipes = [...this.state.recipes]
  recipes.push(recipe);
  this.setState({ recipes })
  this.setState({
    recipeImage: null,
    preview: "",
  })
}

  render(){
    return (

      <div className="container-fluid p-0">
        <div className="above">
          <div id="about">
            <About/>
          </div>
        </div>
        <div className="wrapper pl-4">
        <div id="projects">
          <Project/>
        </div>
      </div>

      <img src={footer} alt="..." className="footer"/>
      <div class="footer-content row p-0 m-0">

        <div className="soical-icons-footer mx-auto">
        <i className="fas fa-envelope-square" onClick={this.toggleEmail}></i>
        <span className={this.state.showEmail}> beahoopdesign@gmail.com</span>
        <i className="fas fa-phone-square-alt" onClick={this.togglePhone}></i>
        <span className="phone-footer">
        <span className={this.state.showPhone}> (843)822-7793</span>
        </span>
        <a href="https://github.com/beahoop" target="_blank" rel="noreferrer">
          <i class="fab fa-github-square"></i>
        </a>

        <a href="https://www.linkedin.com/in/beahoopdesign/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      </div>
      </div>

    );
  }

}

      // <Route path="/recipe/:id" children={<RecipeDetail
      //       setClickedId={this.setClickedId}/>}

export default App;
