import * as marked from 'marked'

export interface Options extends Partial<ThemeOptions> {
  source: string
  output: string
}

export interface DirToJson {
  parent: string
  path: string
  type: 'directory' | 'file'
  name: string
  children?: DirToJson[]
}

export interface LayoutOptions {
  pageTitle: string | null
  content: string
  options: ThemeOptions
  tree: Nav[]
}

export interface Theme {
  css?: Css
  run: (options: LayoutOptions) => string
  renderer: () => marked.Renderer
}

export interface ThemeOptions {
  bodyFont?: string
  monospaceFont?: string
  author?: string
  description?: string
  title?: string
}

export interface WriteCss {
  filename: string
  content: string
}

export interface Nav {
  name: string
  inputPath: string
  htmlLink: string | null
  children: Nav[]
  type: 'directory' | 'page'
}

export type Css = (options: ThemeOptions) => WriteCss