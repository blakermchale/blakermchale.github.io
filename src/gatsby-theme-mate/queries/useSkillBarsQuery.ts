import { graphql, useStaticQuery } from 'gatsby';
import { SkillBar } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    skillBars: {
        id: string;
        name: string;
        proficiency: number;
        color: string;
    }[];
  };
};

export const useSkillBarsQuery = (): SkillBar[] => {
  const { contentfulAbout } = useStaticQuery<QueryResponse>(graphql`
    query SkillBarsQuery {
      contentfulAbout {
        skillBars {
          id
          name
          proficiency
          color
        }
      }
    }
  `);

  return contentfulAbout.skillBars.map(({ ...rest }) => ({
    ...rest,
  }));
};