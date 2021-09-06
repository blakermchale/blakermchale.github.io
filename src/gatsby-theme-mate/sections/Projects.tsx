import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from 'gatsby-theme-mate/src/components/Section';
import { CardContainer } from 'gatsby-theme-mate/src/components/Card';
import Triangle from 'gatsby-theme-mate/src/components/Triangle';
import { SECTION } from '../utils/constants';
import { useProjectsQuery } from '../queries/useProjectsQuery';
import Project from '../components/Project';

const Projects = () => {
  const projects = useProjectsQuery();

  return (
    <Section.Container id={SECTION.projects} Background={Background}>
      <Section.Header name={SECTION.projects} icon="✍️" label="projects" />
      <CardContainer minWidth="300px">
        <Fade direction="down" triggerOnce cascade damping={0.5}>
          {projects.map((p) => (
            <Project {...p} key={p.name} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      position="top-left"
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default Projects;