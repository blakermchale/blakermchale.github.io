import { graphql, useStaticQuery } from 'gatsby';
import { Skill } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    skills: {
      id: string;
      name: string;
      type: string;
      url: string;
      icon: {
        title: string;
        image: {
          src: string;
        };
      };
    }[];
  };
};

export const useSkillsQuery = (): Skill[] => {
  const { contentfulAbout } = useStaticQuery<QueryResponse>(graphql`
    query SkillsQuery {
      contentfulAbout {
        skills {
          id
          name
          type
          url
          icon {
            title
            image: resize(width: 200, quality: 100) {
              src
            }
          }
        }
      }
    }
  `);
  console.log(contentfulAbout.skills)
  return contentfulAbout.skills.map(({ icon, ...rest }) => ({
    ...rest,
    icon: {
      alt: icon.title,
      src: icon.image.src,
    },
  }));
};