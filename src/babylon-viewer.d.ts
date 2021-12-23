export type BabylonViewerProps = {
  model: string
  ['templates.main.params.fill-screen']?: "true" | "false"
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      babylon: BabylonViewerProps
    }
  }
}