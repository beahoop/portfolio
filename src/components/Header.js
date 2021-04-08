import { NavLink } from 'react-router-dom';


function Header(props) {

  return (
    <>

    <div className="navbar sticky-top main-nav">
      <span className="navbar-1 navbar-brand"><NavLink to="/">top</NavLink></span>
      <span className="navbar-1 navbar-brand"><NavLink to="/about">About</NavLink></span>

      <div className="main-side">
      <span className="navbar-1 navbar-brand plus"><NavLink to="/projects">Projects</NavLink></span>
      <span>
      <span className="navbar-1 navbar-brand">< NavLink to="/resume">Resume</NavLink></span>
      </span>
    </div>
    </div>


    </>
  )
}

// <div className="navbar sticky-top navbar-light bg-light">
//   <span className="navbar-brand"><NavLink to="/recipes">Freshly Baked</NavLink></span>
// </div>

export default Header
