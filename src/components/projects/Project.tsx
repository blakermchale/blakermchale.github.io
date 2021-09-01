import React from 'react';
import Expandable from '../common/Expandable';

const projectStyle = {background: "rgba(0, 0, 0, 0.0)"};

interface IProject {
  href: string,
  image: any,
  heading: string,
  subheading: string,
  description: JSX.Element,
  gitlab?: string,
  github?: string,
}

const Project = ({href, image, heading, subheading, description, gitlab, github}: IProject) =>
  <section style={projectStyle}>
    <a href={href} className="image project" alt="image">
      <img src={image} alt="" data-position="center center" />
    </a>
    <div className="content">
      <div className="inner">
        <h2>
            <a href={href}>{heading}</a>
            {!!(gitlab)?<> <a href={gitlab} className="icon devicon-gitlab-plain devicon-override-fontawesome"></a></>:''}
            {!!(github)?<> <a href={github} className="icon devicon-github-original devicon-override-fontawesome"></a></>:''}
        </h2>
        <h4>{subheading}</h4>
        <Expandable maxHeight={150}>
          {description}
        </Expandable>
      </div>
    </div>
  </section>
  

export default Project;
