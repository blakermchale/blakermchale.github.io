import React from 'react';

// Layout components
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Header from 'gatsby-theme-mate/src/components/Header';
import Footer from 'gatsby-theme-mate/src/components/Footer';

// Sections that will fetch data for you
import Landing from 'gatsby-theme-mate/src/sections/Landing';
import About from 'gatsby-theme-mate/src/sections/About';
import Projects from '../sections/Projects';
import Experiences from '../sections/Experiences';
import Skills from '../sections/Skills';

const Home = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Experiences />
    <Skills />
    <Projects />
    <Footer />
  </Layout>
);

export default Home;