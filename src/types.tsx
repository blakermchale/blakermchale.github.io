export interface ITableOfContents {
    items: ITableOfContentsItem[];
}
  
export interface ITableOfContentsItem {
    url?: string;
    title?: string;
    items?: ITableOfContentsItem[];
}