import React from 'react';
import { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";

const SIZE = 5;
const list = new Array(SIZE).fill(0);

export default function App() {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  return (
    <div className="App">
      <Scrollspy sectionRefs={sectionRefs}>
        {({ currentElementIndexInViewport }) => (
          <div>
            <ul
              data-cy="nav-wrapper"
              style={{
                listStyle: "none",
                position: "fixed",
                top: 0,
                right: 0,
                backgroundColor: "#fff",
                padding: "1rem"
              }}
            >
              {list.map((_, i) => (
                <li
                  key={i}
                  className={
                    currentElementIndexInViewport === i ? "active" : ""
                  }
                >
                  <a
                    href={`#section-${i}`}
                    style={{
                      color:
                        currentElementIndexInViewport === i ? "#f00" : "#222"
                    }}
                  >
                    section-{i}
                  </a>
                </li>
              ))}
            </ul>
            <div data-cy="section-wrapper">
              {list.map((_, i) => (
                <div
                  id={`section-${i}`}
                  key={i}
                  ref={sectionRefs[i]}
                  className={
                    currentElementIndexInViewport === i ? "active" : ""
                  }
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "500px",
                    backgroundColor: `#${i}${i}${i}`,
                    color: "#fff",
                    fontSize: "2rem"
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
        )}
      </Scrollspy>
    </div>
  );
}
