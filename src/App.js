import {Component} from 'react';
import About from "./components/About";
import Project from "./components/ProjectGrid";
import Resume from "./components/Resume";
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
  }

this.addRecipe = this.addRecipe.bind(this);

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
        <div className="navbar sticky-top homepage-nav  row">
            <a href="#top">
              <span className="navbar-1 navbar-brand">BeaHoop</span>
            </a>
            <a href="#about">
              <span className="navbar-1 navbar-brand">About</span>
            </a>
            <a href="#projects">
              <span className="navbar-1 navbar-brand">Projects</span>
            </a>
            <a href="#resume">
              <span className="navbar-1 navbar-brand">Resumes</span>
            </a>
            <a href="#easteregg" id="easteregg">
              <span className="navbar-1 navbar-brand"></span>
            </a>
        </div>
          <div className="wrapper">

          <div id="projects">
            <Project/>
          </div>
          <div id="resume">
            <Resume/>
          </div>
        </div>
      </div>

    );
  }

}

      // <Route path="/recipe/:id" children={<RecipeDetail
      //       setClickedId={this.setClickedId}/>}

export default App;
