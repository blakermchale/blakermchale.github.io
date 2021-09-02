import React from 'react';
import SocialLink from 'gatsby-theme-mate/src/components/SocialLink';
import ImageLabel from 'gatsby-theme-mate/src/components/ImageLabel';
import Hide from 'gatsby-theme-mate/src/components/Hide';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Experience as ExperienceType } from '../types';
import { Card } from 'gatsby-theme-mate/src/components/Card';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@theme-ui/mdx';

type Props = ExperienceType;

const Experience = ({
  name,
  description,
  homepage,
  repository,
  type,
  startDate,
  endDate,
  logo,
  subheading
}: Props) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
        <Box
        >
            <SocialLink name="Homepage" icon="link" url={homepage} />
        </Box>
      <TextContainer>
          <Title my={2} pb={1} color="text">
            {name}
          </Title>
      </TextContainer>
    </Flex>
  </Card>
);

const CARD_HEIGHT = '50px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});
  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

export default Experience;