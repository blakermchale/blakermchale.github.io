import React from 'react';

const projectStyle = {background: "rgba(0, 0, 0, 0.0)"};

const Project = ({href, image, heading, subheading, description, gitlab, github}) =>
  <section style={projectStyle}>
    <a href={href} className="image project" alt="image">
      <img src={image} alt="" data-position="center center" />
    </a>
    <div className="content">
      <div className="inner">
        <h2>
            <a href={href}>{heading}</a>
            {!!(gitlab)?<> <a href={gitlab} class="icon devicon-gitlab-plain devicon-override-fontawesome"></a></>:''}
            {!!(github)?<> <a href={github} class="icon devicon-github-original devicon-override-fontawesome"></a></>:''}
        </h2>
        <h4>{subheading}</h4>
        <p>{description}</p>
      </div>
    </div>
  </section>
  

export default Project;
