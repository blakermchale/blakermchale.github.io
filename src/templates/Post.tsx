import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from "gatsby"
import Layout from 'gatsby-theme-mate/src/components/Layout';
import Footer from 'gatsby-theme-mate/src/components/Footer';
import Header from 'gatsby-theme-mate/src/components/Header';
// import TableOfContents from '../../components/common/TableOfContents'
import { MDXProvider } from '@theme-ui/mdx';
import TableOfContents from '../components/TableOfContents';



import { Box, Image, Flex } from 'rebass/styled-components';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Fade } from 'react-awesome-reveal';
// import Section from 'gatsby-theme-mate/src/components/Section';
import Triangle from 'gatsby-theme-mate/src/components/Triangle';
import { SECTION } from 'gatsby-theme-mate/src/utils/constants';


class Post extends React.Component {
    props;
    render () {
        const { data: { contentfulProject: { 
            name,
            useToc,
            post: {
                childMdx
            }
        } } } = this.props;
        const { body, tableOfContents, headings} = childMdx;
        const mdx_body = 
            <>
            <SHeader name={name} />
            <MDXProvider>
                <MDXRenderer headings={headings}>
                    {body}
                </MDXRenderer>
            </MDXProvider></>;
        let inner;
        if (useToc) {
            inner = <>
                <Box
                width={[1, 1, 4 / 6]}
                px={[1, 2, 4]}
                mt={2}
                order={[2, 1]}
                >
                    <Fade direction="down" triggerOnce>
                        {mdx_body}
                    </Fade>
                </Box>

                <Box
                width={[1, 1, 2 / 6]}
                style={{ maxWidth: '300px' }}
                order={[1, 2]}
                >
                    <Fade direction="right" triggerOnce>
                        {
                        tableOfContents && (
                            <TableOfContents tableOfContents={tableOfContents} />
                        )
                        }
                    </Fade>
                </Box>
            </>;
        } else {
            inner = <Box width={[1, 1]} px={[1, 2, 4]} mt={2}>
                <Fade direction="down" triggerOnce>
                    {mdx_body}
                </Fade>
            </Box>;
        }
        return (
            <Layout>
                <Header />
                <SContainer Background={Background}>
                    <Flex justifyContent="center" flexWrap="wrap">
                        {inner}
                    </Flex>
                </SContainer>
                <Footer />
            </Layout>
        );
    }
}

export default Post;

export const query = graphql`
    query MyQuery($slug: String!) {
        contentfulProject(projectUrl: { eq: $slug }) {
            id
            name
            useToc
            post {
              childMdx {
                body
                tableOfContents
              }
            }
        }
    }
`

const Background = () => (
    <>
      <Triangle
        color="muted"
        height={['35vh', '80vh']}
        width={['95vw', '60vw']}
      />
  
      <Triangle
        color="secondary"
        height={['38vh', '80vh']}
        width={['50vw', '35vw']}
      />
  
      <Triangle
        color="primary"
        height={['25vh', '35vh']}
        width={['75vw', '60vw']}
        position="top-right"
      />
  
      <Triangle
        color="muted"
        height={['20vh', '20vh']}
        width={['100vw', '100vw']}
        position="bottom-right"
      />
    </>
  );

  import { ReactNode } from 'react';
  import { Heading } from 'rebass/styled-components';
  import { Slide } from 'react-awesome-reveal';
  import Link from 'gatsby-theme-mate/src/components/Link';
  import { getSectionHref } from 'gatsby-theme-mate/src/utils/helpers';
  
  type ContainerProps = {
    id?: SECTION;
    children: ReactNode;
    Background?: () => JSX.Element;
  };
  
  const SContainer = ({
    id,
    children,
    Background = DefaultBackground,
  }: ContainerProps) => (
    <section style={{ position: 'relative' }}>
      <Background />
      <SectionContainer>{children}</SectionContainer>
    </section>
  );
  
  type HeaderProps = {
    name: string;
    icon?: string;
    label?: string;
  };
  
  const SHeader = ({ name, icon, label }: HeaderProps) => (
    <Slide direction="left" triggerOnce>
      <Heading color="text" mb={4}>
        <Link selected>
          {name}
          {icon && (
            <span role="img" aria-label={label} style={{ marginLeft: '10px' }}>
              {icon}
            </span>
          )}
        </Link>
      </Heading>
    </Slide>
  );
  
  const SectionContainer = styled.div`
    min-height: 100vh;
    min-width: 320px;
    max-width: 1366px;
    display: flex;
    // margin: auto;
    flex: 0 1 auto;
    flex-direction: column;
    justify-content: center;
    padding: 5em 1em;
    scroll-behavior: smooth;
  
    @media (max-width: 400px) {
      padding: 2em 1em;
    }
  `;

  const DefaultBackground = () => <div />;
