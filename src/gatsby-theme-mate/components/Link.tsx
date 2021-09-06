import styled from 'styled-components';
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';

// type Props = {
//   selected?: boolean;
//   href?: string;
//   onClick?: () => void;
// };

const Link = styled(GatsbyLink)<GatsbyLinkProps>`
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  padding-bottom: 5px;
  color: inherit;
  font-weight: 600;
  ${({ selected, theme }) =>
    selected && `border-bottom:  5px solid ${theme.colors.primary}`};
  transition: 0.4s;
  cursor: ${({ onClick, href }) => (onClick || href ? 'pointer' : 'default')};
  &:visited {
      color: orange;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    bottom: -5px;
    background: ${({ theme }) => theme.colors.secondary};
    height: 5px;
    transition-property: width;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  &:focus:after,
  &:hover:after {
    left: 0;
    right: auto;
    width: 100%;
  }
  &:visited {
      color: inherit;
  }
`;

export default Link;