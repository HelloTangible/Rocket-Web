import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  // Set Lock.js as a Script tag until the library is isomorphic
  render () {
    return (
      <html>
        <Head>
          <script src='https://cdn.auth0.com/js/lock/10.5/lock.min.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
