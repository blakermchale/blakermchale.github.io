import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from 'gatsby-theme-mate/src/components/Section';
import { CardContainer } from 'gatsby-theme-mate/src/components/Card';
import Triangle from 'gatsby-theme-mate/src/components/Triangle';
import Experience from '../components/Experience';
import { useExperiencesQuery } from '../queries/useExperiencesQuery';
import { SECTION } from '../utils/constants';

const Experiences = () => {
  const experiences = useExperiencesQuery();

  return (
    <Section.Container id={SECTION.experiences} Background={Background}>
      <Section.Header name={SECTION.experiences} icon="💻" label="notebook" />

      <CardContainer minWidth="500px">
        <Fade direction="down" cascade damping={0.5} triggerOnce>
          {experiences.map((p, i) => (
            <Experience {...p} key={i} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      position="top-right"
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="top-right"
    />

    <Triangle
      color="primary"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      position="bottom-right"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default Experiences;