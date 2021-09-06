import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from 'gatsby-theme-mate/src/components/Section';
import { CardContainer } from 'gatsby-theme-mate/src/components/Card';
import Triangle from 'gatsby-theme-mate/src/components/Triangle';
import Skill from '../components/Skill';
import { useSkillsQuery } from '../queries/useSkillsQuery';
import { useSkillBarsQuery } from '../queries/useSkillBarsQuery';
import { SECTION } from '../utils/constants';
import SkillBar from '../components/SkillBar';
import { Box, Flex } from 'rebass/styled-components';

const Skills = () => {
  const skills = useSkillsQuery();
  const skillBars = useSkillBarsQuery();

  return (
    <Section.Container id={SECTION.skills} Background={Background}>
      <Section.Header name={SECTION.skills} icon="💻" label="notebook" />
      <Flex flexWrap="wrap">
        <Box 
        width={[1, 1, 1 / 2]}
        px={[1, 2, 2]}
        mt={2}
        >
          <Fade direction="down" cascade damping={0.5} triggerOnce>
            {skillBars.map((p, i) => (
              <SkillBar {...p} key={i} />
            ))}
          </Fade>
        </Box>
        <Box
        width={[1, 1, 1 / 2]}
        px={[1, 2, 2]}
        mt={2}
        >
          <CardContainer minWidth="150px">
            <Fade direction="down" cascade damping={0.5} triggerOnce>
              {skills.map((p, i) => (
                <Skill {...p} key={i} />
              ))}
            </Fade>
          </CardContainer>
        </Box>
      </Flex>
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

export default Skills;