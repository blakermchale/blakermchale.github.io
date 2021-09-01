import React from 'react';
import { useRef } from "react";

import Layout   from '../common/layout';
import Footer   from '../common/Footer';
import Sidebar  from '../common/Sidebar';

import Introduction from '../introduction/Introduction';
import Skills from '../skills/Skills';
import About from '../about/About';
import Experiences from '../experiences/Experiences';
import Projects from '../projects/Projects';

import { Scrollspy } from '@makotot/ghostui';

const SIZE = 5;

const IndexPage = ({ pageContext: { projects } }) => {
  const sectionRefs = Array.from({length: SIZE}, (x, i) => useRef(null));

  return (
    <Layout>
      {/* Need to pass current index to sidebar for active following, all vars must be let not const */}
      <Scrollspy sectionRefs={sectionRefs} offset={-300}>
        {({ currentElementIndexInViewport }) => (
          <>
          <Sidebar target_idx={currentElementIndexInViewport} />
          </>
        )}
      </Scrollspy>
      {/* TODO: find way to automate sections */}
      <div id="wrapper">
        <div ref={sectionRefs[0]}><Introduction /></div>
        <div ref={sectionRefs[1]}><About /></div>        
        <div ref={sectionRefs[2]}><Experiences /></div>
        <div ref={sectionRefs[3]}><Skills /></div>
        <div ref={sectionRefs[4]}><Projects projects={projects} /></div>
      </div>

      <Footer />
    </Layout>
  );
}

export default IndexPage;
