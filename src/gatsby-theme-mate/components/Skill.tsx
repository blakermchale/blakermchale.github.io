import React from 'react';
import SocialLink from 'gatsby-theme-mate/src/components/SocialLink';
import ImageLabel from 'gatsby-theme-mate/src/components/ImageLabel';
import Hide from 'gatsby-theme-mate/src/components/Hide';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import { Skill as SkillType } from '../types';
import { Card } from 'gatsby-theme-mate/src/components/Card';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@theme-ui/mdx';

type Props = SkillType;

const Skill = ({
  name,
  type,
  url,
  icon,
}: Props) => (
  <a
    href={url}
    target="__blank"
    title={name}
    style={{ textDecoration: 'none' }}
  >
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT, width: "200px" }}>
        <Box
        width={[2 / 6]}
        >
          <ImageContainer>
            <SkillImage {...icon} />
          </ImageContainer>
        </Box>
        <Box
        width={[4 / 6]}
        >
          <TextContainer>
              <Title my={2} pb={1} color="text">
                {name}
              </Title>
          </TextContainer>
        </Box>
    </Flex>
  </Card>
  </a>
);

const CARD_HEIGHT = '50px';

const MEDIA_QUERY_SMALL = '@media (max-width: 200px)';

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
  // width: calc(100% - ${CARD_HEIGHT});
  // ${MEDIA_QUERY_SMALL} {
  //   width: calc(100% - (${CARD_HEIGHT} / 2));
  // }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};
  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const SkillImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: ${CARD_HEIGHT};
  padding: 5px;
  margin-top: 0px;
  ${MEDIA_QUERY_SMALL} {
    height: calc(${CARD_HEIGHT} / 2);
    width: calc(${CARD_HEIGHT} / 2);
    margin-top: calc(${CARD_HEIGHT} / 4);
    padding: 10px;
  }
`;

export default Skill;