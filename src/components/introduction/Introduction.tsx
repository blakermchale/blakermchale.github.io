import React from 'react';

const id = "intro";
const Introduction = () =>
  <section id={id} className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Hello!</h1>
      <p>
        I'm Blake McHale, a passionate engineer looking to expand what can be done using robotics.
      </p>
      <ul className="actions">
      {/* <!-- Quick link to resume https://webapps.stackexchange.com/questions/48061/can-i-trick-github-into-displaying-the-pdf-in-the-browser-instead-of-downloading --> */}
        <li>
          <a href="https://nbviewer.jupyter.org/github/blakermchale/resume/blob/master/resume.pdf" className="button scrolly">
            Resume
          </a>
        </li>
        <li>
          <a href="mailto:mchale.b@northeastern.edu" className="button scrolly">
            E-mail
          </a>
        </li>
        {/* <!-- TODO: ul only stacks at 480px width, so buttons will go off screen if there are more than 3 --> */}
        <li>
          <a href="https://github.com/blakermchale/" className="button scrolly">
            Github
          </a>
        </li>
        <li>
          <a href="https://gitlab.com/mchale.b" className="button scrolly">
            Gitlab
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/blake-mchale-7b3703150/" className="button scrolly">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
