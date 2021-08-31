import { MDXProviderComponents } from '@theme-ui/mdx';

export interface ITableOfContents {
    items: ITableOfContentsItem[];
}
  
export interface ITableOfContentsItem {
    url?: string;
    title?: string;
    items?: ITableOfContentsItem[];
}

export interface IGraphQlHeadings {
    depth: number;
    value: number;
}

export interface IGraphQlMdx {
    body: any;
    tableOfContents: any;
    headings: IGraphQlHeadings;
}

export interface IPost {
    toc?: boolean;
    mdx?: IGraphQlMdx;
    components?: MDXProviderComponents;
}