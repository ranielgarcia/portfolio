import type { Plugin } from "unified";
import type { Root, Element } from "hast";
import { visit } from "unist-util-visit";

/**
 * Rehype plugin that prepends basePath to root-relative src attributes
 * on <img>, <video>, and <source> elements in the MDX/HTML AST.
 *
 * This runs at SSG build time (server-side), so it uses process.env.BASE_PATH
 * directly — no NEXT_PUBLIC_ bundling quirks. The corrected paths are baked
 * into the static HTML output.
 */
const rehypeBasePath: Plugin<[], Root> = () => {
  const basePath = process.env.BASE_PATH ?? "";
  if (!basePath) return; // no-op in local dev

  return (tree: Root) => {
    visit(tree, "element", (node: Element) => {
      if (!["img", "video", "source"].includes(node.tagName)) return;

      const src = node.properties?.src;
      if (typeof src === "string" && src.startsWith("/")) {
        node.properties.src = `${basePath}${src}`;
      }
    });
  };
};

export default rehypeBasePath;
