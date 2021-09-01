import React from 'react';
import { Link } from 'gatsby';

import '../../assets/sass/main.scss';


const Header = ({unarchived_projects}) => {
  // Create list elements for dropdown depending on unarchived projects
  const projects_dropdown = (<>
    {unarchived_projects.map(project => <Link to={project.slug}>{project.title}</Link>)}
  </>);
  return (
  <header id="header">
    <Link className="title" to="/">
      Blake McHale
    </Link>
    <nav>
      <ul>
        <li className="dropdown">
            <Link to="/" className="dropbtn">Home
                <i className="fa fa-caret-down"></i>
            </Link>
            <div className="dropdown-content">
                <Link to="/#about">About</Link>
                <Link to="/#skills">Skills</Link>
            </div>
        </li>
        <li>
            <Link to="/#experience">Experiences</Link>
        </li>
        <li className="dropdown">
          <Link to="/#projects" className="dropbtn active">Projects
            <i className="fa fa-caret-down"></i>
          </Link>
          <div className="dropdown-content">
            {projects_dropdown}
          </div>
        </li>
      </ul>
    </nav>
  </header>);
}

export default Header;
