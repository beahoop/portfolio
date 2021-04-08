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
