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

const Projects = () => {
  const PROJECTS = [
    {
        href: '',
        image: UHL_02,
        heading: 'Swarm Carrier Capstone',
        subheading: 'Software Lead',
        description: <>
            Project building a large dodecacopter (UHL) for delivery and retrieval of smaller UAVs. Controls are done with a modified 
            version of PX4 using RTPS. RTPS is a communication framework that allows for ROS2 to directly interface with the PX4
            firmware. ROS2 is used as the main infrastructure for communicating commands and retrieving
            data from sensors. Missions are performed with a behavior tree library developed by our club in C++. The main mission 
            involves dropping UAVs from our UHL and then having them catch themselves mid-air using a custom `Drop` mode we added.
            The UAVs will then perform a search mission and reintegrate back into the UHL through precision landing on ArUco markers.
        </>,
    },
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
    },
    {
        href: 'https://www.lockheedmartin.com/en-us/news/events/ai-innovation-challenge.html',
        image: alphapilot_gate,
        heading: 'NUAV AlphaPilot',
        subheading: 'Project Lead | Jan. 2019 - June 2019',
        description: <>
            Autonomous drone racing competition.
        </>,
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
    },
    {
        href: '',
        image: ex_PlanetPolluter,
        heading: 'Planet Polluter',
        subheading: '1st Place NASA Space App Hackathon',
        description: <>
            Game developed in Unity to demonstrate the effect of pollution on the earth's climate.
        </>,
        github: 'https://github.com/christianmkuss/SpaceAppsHackathon',
    },
    {
        href: '',
        image: ex_MazeGame,
        heading: 'Escape Room Maze Game',
        subheading: 'Cornerstone of Engineering 2 Project',
        description: <>
            Maze game developed with Java.
        </>,
    },
    {
        href: '',
        image: ex_PhysSim,
        heading: 'Physics Simulator',
        subheading: 'AP Computer Science Principles Project',
        description: <>
            Basic ball physics simulator.
        </>,
    },
  ];

  const [projects] = React.useState(PROJECTS);

  return (
    <section id="projects" className="wrapper style2 fade-up spotlights">
       <div class="inner">
            <h2 class="major">Projects</h2>
        </div>
       {projects.map(project => <Project key={project.heading} {...project} />)}
    </section>
  );
}

export default Projects;
