import React from 'react';
import { Box, Image, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
import Section from 'gatsby-theme-mate/src/components/Section';
import Triangle from 'gatsby-theme-mate/src/components/Triangle';
import components from 'gatsby-theme-mate/src/components/MarkdownComponents';
import { useAboutMeQuery } from '../queries/useAboutMeQuery';
import { SECTION } from '../utils/constants';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@theme-ui/mdx';
// import Button from '@material-ui/core/Button';
// import { Button } from 'theme-ui';
import { Button } from 'rebass';
import { theme } from 'gatsby-theme-mate/src/theme';

const About = () => {
  const { resume, mdx, profile } = useAboutMeQuery();

  return (
    <Section.Container id={SECTION.about} Background={Background}>
      <Section.Header name={SECTION.about} icon="🙋‍♂️" label="person" />
      <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} mt={2}>
          <Fade direction="down" triggerOnce>
            <MDXProvider components={components}>
                <MDXRenderer>
                    {mdx}
                </MDXRenderer>
            </MDXProvider>
            <a
              href={resume}
              target="__blank"
              style={{ textDecoration: 'none' }}
            >
              <ResumeButton
              mr={2}
              >
                Resume
              </ResumeButton>
            </a>
          </Fade>
        </Box>

        <Box
          width={[1, 1, 2 / 6]}
          style={{ maxWidth: '300px', margin: 'auto' }}
        >
          <Fade direction="right" triggerOnce>
            <ProfilePicture mt={[4, 4, 0]} ml={[0, 0, 1]} {...profile} />
          </Fade>
        </Box>
      </Flex>
    </Section.Container>
  );
};

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.4s ease-out;
  &:hover {
    border-radius: 20%;
  }
`;

const ResumeButton = styled(Button)`
  color: ${theme.colors.background};
  background: ${theme.colors.primary};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Background = () => (
  <>
    <Triangle
      color="secondary"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['20vh', '40vh']}
      width={['75vw', '70vw']}
      position="top-right"
    />

    <Triangle
      color="muted"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </>
);

export default About;