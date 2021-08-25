import React from 'react';

import Layout   from '../components/common/layout';
import Footer   from '../components/common/Footer';
import Sidebar  from '../components/common/Sidebar';

import Introduction from '../components/introduction/Introduction';
import Skills from '../components/skills/Skills';
import Contact      from '../components/contact/Contact';
import About from '../components/about/About';
import Experiences from '../components/experiences/Experiences';
import Projects from '../components/projects/Projects';

import App from "../test/App";

const IndexPage = () =>
  <Layout>
    {/* <App /> */}
    <Sidebar target_idx={0} />

    <div id="wrapper">
      <Introduction />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Contact />
    </div>

    <Footer />
  </Layout>

  // <Layout>
  // <Sidebar target_idx={0} />

  // <div id="wrapper">
  //   <Introduction />
  //   <About />
  //   <Experiences />
  //   <Skills />
  //   <Projects />
  //   <Contact />
  // </div>

  // <Footer />
  // </Layout>

export default IndexPage;

// import App from "../test/App";

// const rootElement = document.getElementById("root");
// const IndexPage = () =>
//   <App />
// export default IndexPage;
