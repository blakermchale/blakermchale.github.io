import React, { ReactNode } from 'react';
import { Box, Flex, Heading, Text, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project as ProjectType } from '../types';
import { Card } from 'gatsby-theme-mate/src/components/Card';
import ImageLabel from 'gatsby-theme-mate/src/components/ImageLabel';
import SocialLink from 'gatsby-theme-mate/src/components/SocialLink';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@theme-ui/mdx';

type Props = ProjectType;

const Project = ({
  name,
  subheading,
  description,
  homepage,
  repository,
  type,
  publishedDate,
  cover,
}: Props) => {
  let icon;
  if (repository) {
    if (repository.includes("github")) {
      icon = "github"
    } else if (repository.includes("gitlab")) {
      icon = "gitlab"
    }
  }
  return (
  <Card p={0} pb={4}>
    <Flex>
      <Box width={ 99/100  }>
        <EllipsisHeading m={3} color="text">
          {name}
          <Subheading>{ subheading }</Subheading>
        </EllipsisHeading>
      </Box>
      {repository && <Box mx={1} fontSize={5} padding="10px">
        <SocialLink name="Repository" icon={icon} url={repository} />
      </Box>}
    </Flex>
    {/* <EllipsisHeading m={3} color="text">
      {name}
      <Subheading>{ subheading }</Subheading>
    </EllipsisHeading>
    
    <Flex
      style={{
        float: 'right',
      }}
    >
      {repository && <Box mx={1} fontSize={5} padding="10px">
        <SocialLink name="Repository" icon={icon} url={repository} />
      </Box>}
    </Flex> */}
    {cover && <CoverImage {...cover} height="200px" />}
    <Text m={3} color="text" style={{ overflow: 'auto' }} maxHeight="100px">
      {/* {description} */}
      <MDXProvider>
          <MDXRenderer>
              {description}
          </MDXRenderer>
      </MDXProvider>
    </Text>
    <ImageLabel bg="primary" color="background" position="bottom-left" round>
      {type}
    </ImageLabel>
    {homepage && <a
      href={homepage}
      target="__blank"
      title={name}
      style={{ textDecoration: 'none' }}
    >
      <MoreLabel bg="primary" color="background" position="bottom-right" round>
        {`more`}
      </MoreLabel>
    </a>}
  </Card>
  );
}


type PostContainerProps = {
  url: string;
  title: string;
  children: ReactNode;
};

const PostContainer = ({ url, title, children }: PostContainerProps) => (
  <a
    href={url}
    target="__blank"
    title={title}
    style={{ textDecoration: 'none' }}
  >
    <Card p={0} pb={4}>
      {children}
    </Card>
  </a>
);

const MoreLabel = styled(ImageLabel)`
  &:hover {
    opacity: 0.7;
  }
`

const CoverImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Subheading = styled(Text)`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  // display: table;
`;

export default Project;
