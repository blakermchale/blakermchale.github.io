import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from "gatsby"

import Layout from '../../components/common/layout';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import TableOfContents from '../../components/common/TableOfContents'
import { MDXProvider } from '@theme-ui/mdx';
import { IPost } from '../../types';


class Post extends React.Component {
    props;
    render () {
        const { pageContext: { unarchived } } = this.props;
        const { data: { mdx }, components } = this.props;
        const { frontmatter: { title, toc } } = mdx;
        const mdx_body = 
            <>
            <h1 id={title} className="major">{title}</h1>
            <MDXProvider components={components}>
                <MDXRenderer headings={mdx.headings}>
                    {mdx.body}
                </MDXRenderer>
            </MDXProvider></>;
        let inner;
        if (toc) {
            inner = <div className="inner row">
                <div className="col-3 col-12-medium">
                    {
                    mdx?.tableOfContents && (
                        <TableOfContents tableOfContents={mdx.tableOfContents} />
                    )
                    }
                </div>
                <div className="col-9 col-12-medium">
                    {mdx_body}
                </div>
            </div>;
        } else {
            inner = <div className="inner">
                {mdx_body}
            </div>;
        }
        const post = <>
        <Layout>
            <Header unarchived_projects={unarchived} />
            <div id="wrapper">
            <section id="main" className="wrapper">
                {inner}
            </section>
            </div>
            <Footer /> 
        </Layout>
        </>;
        return post;
    }
}

Post.defaultProps = {
    data: {
        mdx: {
            frontmatter: {
                toc: true
            }
        }
    }
}

export default Post;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
        id
        excerpt(pruneLength: 160)
        body
        tableOfContents
        frontmatter {
            title
            toc
        }
    }
  }
`
