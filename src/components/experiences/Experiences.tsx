import React from 'react';

import jpl_logo from '../../images/jpl_logo.jpg';
import mitre_logo from '../../images/mitre_logo.jpg'
import nsmrl_logo from '../../images/nsmrl_logo.jpg'
import ssci_logo from '../../images/ssci_logo.jpg'
import supship_logo from '../../images/supship_logo.png'

import Experience from './Experience';

let Experiences = () => {
  const EXPERIENCES = [
    {
      href: 'https://www.jpl.nasa.gov/',
      image: jpl_logo,
      heading: 'NASA Jet Propulsion Laboratory',
      subheading: 'Software Engineering Co-op 347K | Jan. 2021 - June 2021',
      description: <>
        Supported the development of Surface Simulation (Ssim), a simulator used by rover planners to validate rover sequence 
        commands on the Mars rover. Improved terrain support for Ssim by adding better multi-threading of terrain files. 
        Extended testing capabilities for both Ssim and its web interface. Improved web interface by exposing Ssim inputs and 
        designing better external terrain file management. Developed a parser to extract information from flight software channels.
        </>,
    },
    {
      href: 'https://www.mitre.org/',
      image: mitre_logo,
      heading: 'MITRE',
      subheading: 'PNT Platform Software Intern | June 2020 - August 2020',
      description: <>
        Created a MITRE internal python package that simulated signal propagation. Focused on adding support of terrain maps to 
        pathloss models. Utilized existing packages, such as GDAL and Cartopy, to read in DTED and SRTM files then show accurate 
        latitude/longitude plots. Also, implemented collision detection methods for determing if terrain is blocking signal 
        between receiver and transmitter.
        </>,
    },
    {
      href: 'https://www.med.navy.mil/sites/nmrc/NSMRL/Pages/Home.aspx',
      image: nsmrl_logo,
      heading: 'Naval Submarine Medical Research Laboratory',
      subheading: 'NREIP Software Intern | June 2019 - August 2019',
      description: <>
      As an NREIP intern, I worked on developing neural networks to predict reaction time in sleep deprived individuals. 
      I used Python and TensorFlow to implement various types such as a fully connected neural network and convolutional 
      neural network. To perform quick analysis I used the hyperopt library and created a system to compare and store various 
      architectures.
      </>,
    },
    {
      href: 'https://www.ssci.com/',
      image: ssci_logo,
      heading: 'Scientific Systems Company Inc.',
      subheading: 'Simulations Engineer Co-op | Jan. 2019 - June 2019',
      description: 
      <>
        Developed software to support simulations in two DARPA projects: 
        <a href="https://www.darpa.mil/program/urban-reconnaissance-through-supervised-autonomy">URSA</a> 
        and <a href="https://www.subtchallenge.com/">Subterranean challenge</a>. For URSA I
        built environments and worlds with artificially intelligent characters in them to test the
        capabilities of drones running FOCUS. AirSim was utilized to mimic the drones physics within these
        environments. For SubTerranean challenge I supported both the Systems and Hardware team (MARBLE)
        and simulation team (COLLEMBOLA). For MARBLE I developed a base station that interacted with the
        robots using ROS and JavaScript. For COLLEMBOLA I aided in testing and developing the control systems
        for managing and moving multiple drones within the Virtual Track. I mostly worked on writing algorithms
        for navigating through the tunnel system safely.
      </>,
    },
    {
      href: 'https://www.navsea.navy.mil/Home/SUPSHIP/Groton/',
      image: supship_logo,
      heading: 'Supervisory of Shipbuilding, Groton CT',
      subheading: 'Student Trainee (Office Automation) | June 2018 - August 2018',
      description: <>
        Worked as an intern developing software to support the engineering departments flow of information. 
        I designed, optimized, and secured a database containing PII using Microsoft Access, SQL, and Excel.
        </>,
    },
  ];

  const [experiences] = React.useState(EXPERIENCES);

  return (
    <section id="experience" className="wrapper style1 fade-up spotlights">
       <div className="inner">
            <h2 className="major">Experience</h2>
        </div>
       {experiences.map(experience => <Experience key={experience.heading} {...experience} />)}
    </section>
  );
}

export default Experiences;
