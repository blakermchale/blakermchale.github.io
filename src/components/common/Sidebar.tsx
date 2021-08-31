import React from 'react';

import Tab from './Tab';

const Sidebar = ({target_idx}) => {
  let tabs = [
    { content: 'Hello', href: 'intro', idx: 0, target_idx: Number(target_idx) },
    { content: 'About Me', href: 'about', idx: 1, target_idx: Number(target_idx) },
    { content: 'Experience', href: 'experience', idx: 2, target_idx: Number(target_idx) },
    { content: 'Skills', href: 'skills', idx: 3, target_idx: Number(target_idx) },
    { content: 'Projects', href: 'projects', idx: 4, target_idx: Number(target_idx) },
    { content: 'Contact Me', href: 'contact', idx: 5, target_idx: Number(target_idx) },
  ]

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <ul>
            {tabs.map(tab => <Tab key={tab.href} {...tab} />)}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Sidebar;
