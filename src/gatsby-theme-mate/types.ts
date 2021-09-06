import { IconName } from '@fortawesome/fontawesome-svg-core';
import { DefaultTheme } from 'styled-components';
import { Theme as RebassTheme } from '@rebass/preset';

export type Theme = DefaultTheme & RebassTheme;

export type Image = {
  src: string;
  alt: string;
};

export type Favicon = {
  src: string;
};

export type Experience = {
    name: string;
    subheading: string;
    description: string;
    homepage: string;
    repository: string;
    type: string;
    startDate: string;
    endDate: string;
    logo: Image;
}

export type Skill = {
  name: string;
  type: string;
  url: string;
  icon: Image;
}

export type SkillBar = {
  name: string;
  proficiency: number;
  color: string;
}

export type Project = {
  name: string;
  subheading: string;
  description: string;
  homepage: string;
  repository: string;
  type: string;
  publishedDate: string;
  cover: Image;
};

export type AboutMe = {
  mdx: string;
  profile: Image;
  resume: string;
};

export type SocialLink = {
  url: string;
  name: string;
  icon: IconName;
};

export type MediumPost = {
  title: string;
  text: string;
  cover: string;
  url: string;
  date: string;
  time: number;
};

export type MediumAuthor = {
  id: string;
  name: string;
  username: string;
};

export type Landing = {
  name: string;
  roles: string[];
  socialLinks: SocialLink[];
};