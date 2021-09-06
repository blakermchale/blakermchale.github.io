import React from 'react';
import Headroom from 'react-headroom';
import { Box, Link as RebassLink, Flex, Image } from 'rebass/styled-components';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import Link from './Link';
import { capitalize } from 'gatsby-theme-mate/src/utils/string';
import { useHelmetQuery } from 'gatsby-theme-mate/src/queries/useHelmetQuery';
import { SECTION } from 'gatsby-theme-mate/src/utils/constants';
import { getSectionHref } from 'gatsby-theme-mate/src/utils/helpers';

import { Switch } from '@theme-ui/components';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import HoverMenu from 'material-ui-popup-state/HoverMenu'
import PopupState, { bindHover, bindMenu } from 'material-ui-popup-state'
import { useProjectsQuery } from '../queries/useProjectsQuery';
import { getIconDefinition } from 'gatsby-theme-mate/src/utils/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// https://www.geeksforgeeks.org/how-to-detect-touch-screen-device-using-javascript/
function is_touch_enabled() {
  if (window !== undefined)
    return ( 'ontouchstart' in window ) || 
          ( navigator.maxTouchPoints > 0 );
          //  ( navigator.msMaxTouchPoints > 0 );
}

const RebassGatsbyLink = (props) =>
  <RebassLink
    {...props}
    as={GatsbyLink}
  />

const Header = () => {
  const { profile } = useHelmetQuery();
  const projects = useProjectsQuery();
  const caretDown = <FontAwesomeIcon icon={getIconDefinition('caret-down')}/>

  return (
    <StyledHeadroom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        px={3}
      >
        <RebassGatsbyLink to={`/#${getSectionHref(SECTION.home)}`} variant="empty">
          <Flex justifyContent="center">
            <Image
              src={profile.bigIcon.src}
              height={['60px', '80px']}
              width={['60px', '80px']}
              alt="Portfolio Logo"
              p={2}
              css={{ borderRadius: '20px', cursor: 'pointer' }}
            />
          </Flex>
        </RebassGatsbyLink>
        <Flex mr={[0, 3, 5]}>
          {Object.keys(SECTION)
            .filter((id) => id !== 'home')
            .map((id) => {
              // TODO: Enable touch with non-hover dropdown
              if (id === 'projects') {
                return (
                  <PopupState variant="popover" popupId="demoMenu">
                    {(popupState) => (
                      <React.Fragment>
                        <Box key={id} ml={[2, 3]} color="background" fontSize={[2, 3]} {...bindHover(popupState)}>
                          <Link to={`/#${id}`} tabIndex={0}>
                            {capitalize(id)} {caretDown}
                          </Link>
                        </Box>
                        <HoverMenu
                          {...bindMenu(popupState)}
                          style={{top: "42px"}}
                          disableScrollLock={true}
                        >
                          {projects.map((p) => {
                            if (p.homepage && p.homepage.startsWith("/")) {
                              return (
                                <MenuItem onClick={popupState.close}>
                                  <GatsbyLink to={p.homepage} style={{textDecoration: "none"}}>
                                    {p.name}
                                  </GatsbyLink>
                                </MenuItem>
                              );
                            }
                            return;
                          })}
                        </HoverMenu>
                      </React.Fragment>
                    )}
                  </PopupState>
                );} else {
                  return (
                    <Box key={id} ml={[2, 3]} color="background" fontSize={[2, 3]}>
                      <Link to={`/#${id}`} tabIndex={0}>
                        {capitalize(id)}
                      </Link>
                    </Box>
                  )
                }
              }
            )}
        </Flex>
      </Flex>
    </StyledHeadroom>
  );
};

const StyledHeadroom = styled(Headroom)`
  * {
    transition: background-color 0.1s ease;
  }
  .headroom--pinned {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  position: absolute;
  width: 100%;
`;

export default Header;