import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from '@astrojs/mdx'
import remarkToc from 'remark-toc'
import rehypeMinifyHtml from 'rehype-preset-minify'

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'one-dark-pro'
      },
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeMinifyHtml],
      remarkRehype: {},
      gfm: false
    })
  ]
})