import React from 'react';
// import { useRef } from 'react';
import Scrollspy from 'react-scrollspy';
// import { Scrollspy } from "@makotot/ghostui";

import Tab from './Tab';

const Sidebar = ({target_idx}) => {
  // var target_idx = 0;
  const [tabs] = React.useState([
    { content: 'Hello', href: 'intro', idx: 0, target_idx: Number(target_idx) },
    { content: 'About Me', href: 'about', idx: 1, target_idx: Number(target_idx) },
    { content: 'Experience', href: 'experience', idx: 2, target_idx: Number(target_idx) },
    { content: 'Skills', href: 'skills', idx: 3, target_idx: Number(target_idx) },
    { content: 'Projects', href: 'projects', idx: 4, target_idx: Number(target_idx) },
    { content: 'Contact Me', href: 'contact', idx: 5, target_idx: Number(target_idx) },
  ]);

  // const sectionRefs = [
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null),
  //   useRef<HTMLDivElement>(null)
  // ];

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            {tabs.map(tab => <Tab key={tab.href} {...tab} />)}
          </ul>
          {/* <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
          >
            {tabs.map(tab => <Tab key={tab.href} {...tab} />)}
          </Scrollspy> */}


          {/* <Scrollspy sectionRefs={sectionRefs}>
          {({ currentElementIndexInViewport }) => (
            <>
              {tabs.map(tab => <Tab key={tab.href} {...tab} />)
            }</>
          )}
          </Scrollspy> */}
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;
