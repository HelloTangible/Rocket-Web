import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

const layoutStyle = {
  fontFamily: 'Open Sans, sans-serif',
  color: '#111',
  backgroundColor: '#ecf0f1',
  lineHeight: '1.5',
  margin: '0'
}

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
      <html style={layoutStyle}>
        <Head>
          <script src='https://cdn.auth0.com/js/lock/10.5/lock.min.js'></script>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <link href='static/styles/globalStyles.css' rel='stylesheet' />
        </Head>
        <body>
          <style jsx global>{`
            h1 {
              font-size: 1.5em;
            }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
