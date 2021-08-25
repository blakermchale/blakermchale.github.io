import React from 'react';

const experienceStyle = {background: "rgba(0, 0, 0, 0.0)"};

const Experience = ({href, image, heading, subheading, description}) =>
  <section style={experienceStyle}>
    <a href={href} className="image circle" alt="image">
      <img src={image} className="circle" alt="" data-position="center center" />
    </a>
    <div className="content">
      <div className="inner">
        <h2><a href={href}>{heading}</a></h2>
        <h4>{subheading}</h4>
        <p>{description}</p>
      </div>
    </div>
  </section>
  

export default Experience;
