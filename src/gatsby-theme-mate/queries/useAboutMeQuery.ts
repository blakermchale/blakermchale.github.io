import { graphql, useStaticQuery } from 'gatsby';
import { AboutMe } from '../types';

export type QueryResponse = {
  contentfulAbout: {
    resume: {
      url: string;
    }
    aboutMe: {
      childMdx: {
        body: string;
      };
    };
    profile: {
      title: string;
      image: {
        src: string;
      };
    };
  };
};

export const useAboutMeQuery = (): AboutMe => {
  const {
    contentfulAbout: { resume, aboutMe, profile },
  } = useStaticQuery<QueryResponse>(graphql`
    query AboutMeQuery2 {
      contentfulAbout {
        resume {
          url
        }
        aboutMe {
            childMdx {
                body
            }
        }
        profile {
          title
          image: resize(width: 450, quality: 100) {
            src
          }
        }
      }
    }
  `);

  return {
    resume: resume.url,
    mdx: aboutMe.childMdx.body,
    profile: {
      alt: profile.title,
      src: profile.image.src,
    },
  };
};