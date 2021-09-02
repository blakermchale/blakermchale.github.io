/** @jsx jsx */
// https://nickymeuleman.netlify.app/blog/table-of-contents
// https://github.com/NickyMeuleman/gatsby-theme-nicky-blog/blob/master/theme/gatsby-config.js
import { jsx } from "theme-ui";
import { useActiveId } from "../hooks/useActiveId";
import { ITableOfContents, ITableOfContentsItem } from "../types";
import React, { useEffect, useState } from "react";
import { ColorModeProvider } from "@theme-ui/color-modes";
import { theme } from "gatsby-theme-mate/src/theme"

interface IProps {
  tableOfContents: ITableOfContents;
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
// TODO: Why is this rule on here? It's disabled in eslintrc
function getIds(items: ITableOfContentsItem[]) {
  return items.reduce<string[]>((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it and add the raw CSS-id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
}


function renderItems(
  items: ITableOfContentsItem[],
  activeId: string,
  isRecursiveCall?: boolean
): JSX.Element {
  return (
    <ol
      sx={{
        listStyle: `none`,
        padding: 0,
        pl: isRecursiveCall ? 2 : null,
        variant: isRecursiveCall ? undefined : `styles.TableOfContentsList`,
      }}
    >
      {items.map((item) => {
        // exit early if there is no url, that also means there can't be any item.items
        // Reason: heading levels should only ever increase by one level.
        if (!item.url) {
          return null;
        }
        return (
          <li key={item.url} sx={{ mt: isRecursiveCall ? 1 : 3 }}>
            <a
              href={item.url}
              // sx={{
              //   variant:
              //     activeId === item.url.slice(1)
              //       ? `styles.TableOfContentsList.link.active`
              //       : `styles.TableOfContentsList.link`,
              // }}
              sx={{
                color: activeId === item.url.slice(1) ? "white" : "#FFFFFF8C",
              }}
            >
              {item.title}
            </a>
            {item.items && renderItems(item.items, activeId, true)}
          </li>
        );
      })}
    </ol>
  );
}

const TableOfContents: React.FC<IProps> = ({ tableOfContents }) => {
  const { items } = tableOfContents;
  const activeId = useActiveId(getIds(items));
  // return renderItems(items, activeId);
  return (
    <>
      <details
          sx={{
            border: `1px solid`,
            borderColor: theme.colors.secondary,
            background: theme.colors.primary,
            padding: 3,
            mb: 4,
            position: [null, null, null, `sticky`],
            // maxHeight: (theme: any) => `calc(100vh - (${theme.space[5]} * 2))`,
            overflow: `auto`,
            top: 5,
            variant: `styles.PostExtra.details`,
          }}
          open
        >
          <summary
            sx={{
              margin: 0,
              textTransform: `uppercase`,
              letterSpacing: `wider`,
              fontWeight: `bold`,
              color: `mutedText`,
              fontSize: 1,
              variant: `styles.PostExtra.title`,
            }}
          >
            Table of contents
          </summary>
          { renderItems(items, activeId) }
        </details>
    </>
  )
};

export default TableOfContents;