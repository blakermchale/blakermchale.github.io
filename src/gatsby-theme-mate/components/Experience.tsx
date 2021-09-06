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
      <TextContainer>
        <span>
          <a
              href={homepage}
              target="__blank"
              title={name}
              style={{ textDecoration: 'none' }}
            >
          <Title my={2} pb={1} color="text">
            {name} <SocialLink name="Homepage" icon="link" url={homepage} />
          </Title>
          </a>
          <Subheading my={2} pb={1} color="text">
              { subheading }
          </Subheading>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }} color="text">
          {/* TODO: fix subheading style break after mdx render initially */}
            <MDXProvider>
                <MDXRenderer>
                    {description}
                </MDXRenderer>
            </MDXProvider>
            {/* {description} */}
        </Text>
      </TextContainer>

      <ImageContainer>
        <ExperienceImage {...logo} />
        <ExperienceTag>
          <Flex
            m={1}
            style={{
              float: 'right',
            }}
          >
            <Box mx={1} fontSize={4}>
              <SocialLink name="Homepage" icon="globe" url={homepage} />
            </Box>
          </Flex>
          <ImageLabel
            bg="primary"
            color="background"
            position="bottom-right"
            round
          >
            {type}
          </ImageLabel>
          <Hide query="md">
            <ImageLabel bg="muted" color="primary">
              {startDate} - {endDate}
            </ImageLabel>
          </Hide>
        </ExperienceTag>
      </ImageContainer>
    </Flex>
  </Card>
);

const CARD_HEIGHT = '300px';

const MEDIA_QUERY_SMALL = '@media (max-width: 500px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${({ theme }) => theme.colors.primary} 5px solid;
`;

const Subheading = styled(Text)`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: none;
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

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const ExperienceImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 40px;
  margin-top: 0px;
  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

const ExperienceTag = styled.div`
  position: relative;
  height: ${CARD_HEIGHT};
  top: calc(
    -${CARD_HEIGHT} - 3.5px
  ); /*don't know why I have to add 3.5px here ... */
  ${MEDIA_QUERY_SMALL} {
    top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
  }
`;

export default Experience;