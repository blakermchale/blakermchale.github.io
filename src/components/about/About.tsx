import React from 'react';

import bmchale_headshot from '../../images/bmchale_headshot_small.jpg';

const About = () => {
  return (
    <section id="about" className="wrapper style2 spotlights">
        <section>
            <a href="#intro" className="image circle">
              <img src={bmchale_headshot} alt="" data-position="center center"/>
            </a>
            <div className="content">
                <div className="inner">
                    <h2>About Me</h2>
                    <p>
                      I am currently a fifth year computer engineering student pursuing a Bachelors and Masters at Northeastern University in Boston, Massachusetts.
                      My passion is to develop software and hardware that will improve the lives of others. Some of my
                      interests include soccer, basketball, tennis, rock climbing, and music.
                    </p>
                </div>
            </div>
        </section>
    </section>
  );
}

export default About;
