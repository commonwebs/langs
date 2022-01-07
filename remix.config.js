const { remarkMdxFrontmatter } = require("remark-mdx-frontmatter");

/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  mdx: async (filename) => {
    const [rehypeHighlight, remarkToc, remarkMath, rehypeKatex, remarkGfm] =
      await Promise.all([
        import("rehype-highlight").then((mod) => mod.default),
        import("remark-toc").then((mod) => mod.default),
        import("remark-math").then((mod) => mod.default),
        import("rehype-katex").then((mod) => mod.default),
        import("remark-gfm").then((mod) => mod.default),
      ]);

    console.log(222222222);
    console.log(remarkMath);
    console.log(rehypeKatex);
    console.log(remarkGfm);

    return {
      remarkPlugins: [remarkToc, remarkMdxFrontmatter, remarkMath, remarkGfm],
      rehypePlugins: [rehypeHighlight, rehypeKatex],
    };
  },
};

// const rehypeKatex = require("rehype-katex");
// const remarkMath = require("remark-math");

// can be an sync / async function or an object
