import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        style={{
          fontSize: "48px",
          padding: "8px 8px 16px 8px",
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ fontSize: "36px", padding: "6px 6px 12px 6px" }}>
        {children}
      </h2>
    ),
    p: ({ children }) => <p style={{ padding: "8px" }}>{children}</p>,
    ul: ({ children }) => (
      <ul style={{ listStyleType: "circle", paddingLeft: "32px" }}>
        {children}
      </ul>
    ),
    ...components,
  };
}
