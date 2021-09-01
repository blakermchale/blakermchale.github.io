import React from 'react';
import Expandable from '../common/Expandable';

const experienceStyle = {background: "rgba(0, 0, 0, 0.0)"};

let Experience = ({href, image, heading, subheading, description}) =>
  <section style={experienceStyle}>
    <a href={href} className="image circle" alt="image">
      <img src={image} className="circle" alt="" data-position="center center" />
    </a>
    <div className="content">
      <div className="inner">
        <h2><a href={href}>{heading}</a></h2>
        <h4>{subheading}</h4>
        <Expandable maxHeight={150}>
        {description}
        </Expandable>
      </div>
    </div>
  </section>
  

export default Experience;
