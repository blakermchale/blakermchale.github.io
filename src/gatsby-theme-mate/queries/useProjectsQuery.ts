import { graphql, useStaticQuery } from 'gatsby';
import { Project } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    projects: {
      id: string;
      name: string;
      // FIXME: Can't use description until shadowing queries is figured out
      brief: {
        childMarkdownRemark: {
            rawMarkdownBody: string;
          };
      };
      homepage: string;
      repository: string;
      publishedDate: string;
      type: string;
      subheading: string;
      cover: {
        title: string;
        image: {
          src: string;
        };
      };
    }[];
  };
};

export const useProjectsQuery = (): Project[] => {
  const { contentfulAbout } = useStaticQuery<QueryResponse>(graphql`
    query ProjectsQuery2 {
      contentfulAbout {
        projects {
          id
          name
          subheading
          brief {
            childMarkdownRemark {
                rawMarkdownBody
            }
          }
          homepage: projectUrl
          repository: repositoryUrl
          publishedDate(formatString: "YYYY")
          type
          cover {
            title
            image: resize(width: 200, quality: 100) {
              src
            }
          }
        }
      }
    }
  `);
  console.log(contentfulAbout)
  return contentfulAbout.projects.map(({ cover, brief, ...rest }) => ({
    ...rest,
    description: brief.childMarkdownRemark.rawMarkdownBody,
    cover: {
      alt: cover.title,
      src: cover.image.src,
    },
  }));
};