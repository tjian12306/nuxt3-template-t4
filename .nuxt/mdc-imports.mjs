import _RemarkEmoji from 'remark-emoji'
import _Highlight from '/home/tjian/Workspace/workspaceForNode/nuxt3-template-t4/node_modules/.pnpm/@nuxtjs+mdc@0.17.0_magicast@0.3.5/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"default":"github-light","dark":"github-dark"}}
