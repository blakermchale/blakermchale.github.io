import { graphql, useStaticQuery } from 'gatsby';
import { Experience } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    experiences: {
      id: string;
      name: string;
      description: {
        childMdx: {
          body: string;
        }
      };
      homepage: string;
      repository: string;
      startDate: string;
      endDate: string;
      type: string;
      subheading: string;
      logo: {
        title: string;
        image: {
          src: string;
        };
      };
    }[];
  };
};

export const useExperiencesQuery = (): Experience[] => {
  const { contentfulAbout } = useStaticQuery<QueryResponse>(graphql`
    query ExperiencesQuery {
      contentfulAbout {
        experiences {
          id
          name
          description {
            childMdx {
              body
            }
          }
          subheading
          homepage: companyUrl
          startDate(formatString: "MMM YY'")
          endDate(formatString: "MMM YY'")
          type
          logo {
            title
            image: resize(width: 200, quality: 100) {
              src
            }
          }
        }
      }
    }
  `);

  return contentfulAbout.experiences.map(({ logo, description, ...rest }) => ({
    ...rest,
    description: description.childMdx.body,
    logo: {
      alt: logo.title,
      src: logo.image.src,
    },
  }));
};