import React from 'react';

import Skill from './Skill';

const SkillList = () => {
  const SKILLS = [
    {
      heading: 'C++',
      description: '',
      iconClass: 'devicon-cplusplus-plain devicon-override-fontawesome',
    },
    {
      heading: 'Python',
      description: '',
      iconClass: 'devicon-python-plain devicon-override-fontawesome',
    },
    {
      heading: 'Javascript',
      description: '',
      iconClass: 'devicon-javascript-plain devicon-override-fontawesome',
    },
    {
      heading: 'ROS/ROS2',
      description: '',
      iconClass: 'icon-ros-logo-dots icomoon-override-fontawesome',
    },
    {
      heading: 'Unreal Engine',
      description: '',
      iconClass: 'icon-unreal-engine-logo-no-circle icomoon-override-fontawesome',
    },
    {
      heading: 'Gazebo',
      description: '',
      iconClass: 'icon-gazebo-logo-black icomoon-override-fontawesome',
    },
  ]

  const [skills] = React.useState(SKILLS);

  return (
    <>
      {skills.map((skill) => <Skill key={skill.heading} {...skill} />)}
    </>
  )
}

export default SkillList;
