import React from 'react';

import tetris from '../../images/tetris.jpg'
import alphapilot_gate from '../../images/nuav/alphapilot_gate.jpg'
import ex_PlanetPolluter from '../../images/planetpolluter/ex_PlanetPolluter.png'
import ex_MazeGame from '../../images/mazegame/ex_MazeGame.png'
import ex_PhysSim from '../../images/physsim/ex_PhysSim.png'
import flight_episode from '../../images/deep_flight/flight_episode.png'
import frog_v2_fleet from '../../images/nuav/frog_v2_fleet.jpg'
import UHL_02 from '../../images/nuav/UHL_02.png'

import Project from './Project';

const Projects = ({ projects }) => {
  const PROJECTS = [
    {
      href: '',
      image: frog_v2_fleet,
      heading: 'NUAV Software',
      subheading: 'Project Lead | June 2019 - Present',
      description: <>
        Northeastern Unmanned Aerial Vehicles (NUAV) is a club my friends and I started my
        sophomore year. It focuses on developing solutions to robotics problems involving
        UAVs. A large portion of the software was developed with the capstone project above
        in mind. Custom interfaces to PX4 using RTPS are primarily used and various tools
        are being developed, such as behavior trees, aruco detection, simulation, and
        path planning.
      </>,
      gitlab: 'https://gitlab.com/aeronu/nuav',
      date: "2021-09-02",
    },
    {
        href: '',
        image: flight_episode,
        heading: 'Deep Flight',
        subheading: 'CS4100 Artificial Intelligence Final Project',
        description: <>
            Reinforcement learning project with double DQN to train UAV navigation using a depth camera in AirSim
        </>,
        github: 'https://github.com/blakermchale/deep_flight',
        date: "2020-12-15",
    },
    {
        href: 'https://www.lockheedmartin.com/en-us/news/events/ai-innovation-challenge.html',
        image: alphapilot_gate,
        heading: 'NUAV AlphaPilot',
        subheading: 'Project Lead | Jan. 2019 - June 2019',
        description: <>
            Autonomous drone racing competition.
        </>,
        date: "2019-05-10",
    },
    {
        href: 'https://devpost.com/software/retro-eye',
        image: tetris,
        heading: 'Retro-Eye',
        subheading: 'Hack Harvard Submission',
        description: <>
            Eye tracker that lets all individuals play Tetris, with their eyes.
        </>,
        github: 'https://github.com/christianmkuss/retroeye',
        date: "2019-10-21",
    },
  ];
  projects = PROJECTS.concat(projects);
  projects = projects.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });
  const [_projects] = React.useState(projects);

  return (
    <section id="projects" className="wrapper style2 fade-up spotlights">
       <div className="inner">
            <h2 className="major">Projects</h2>
        </div>
       {_projects.map(project => <Project key={project.heading} {...project} />)}
    </section>

  );
}

export default Projects;
