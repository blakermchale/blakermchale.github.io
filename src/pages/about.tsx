import React from 'react';
import { useRef } from "react";

import Layout   from '../components/common/layout';
import Footer   from '../components/common/Footer';
import Sidebar  from '../components/common/Sidebar';

import Introduction from '../components/introduction/Introduction';
import Skills from '../components/skills/Skills';
import Contact      from '../components/contact/Contact';
import About from '../components/about/About';
import Experiences from '../components/experiences/Experiences';
import Projects from '../components/projects/Projects';

import { Scrollspy } from '@makotot/ghostui';

const SIZE = 6;

const IndexPage = () => {
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
        <div ref={sectionRefs[4]}><Projects /></div>
        <div ref={sectionRefs[5]}><Contact /></div>
      </div>

      <Footer />
    </Layout>
  );
}

export default IndexPage;
