import React from 'react'
import NextDocument from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })
    const initialProps = await NextDocument.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {sheets.getStyleElement()}
        </React.Fragment>
      ]
    }
  }
}
