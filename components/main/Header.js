import React from 'react'
import Head from 'next/head'

export default () => (
  <header>
    <Head>
      <style>{`
        html {
          font-family: Open Sans, sans-serif;
          color: #111;
          background-color: #ecf0f1;
          line-height: 1.5;
          margin: 0;
        }

        body { margin: 0 } /* custom! */

        h1 {
          font-size: 1.5em;
        }

        .delete {
          color: red;
          font-size: 1.5em;
        }
        
        .Button, .PanelHeader, .Toolbar {
          background-color: #3ca2e0 !important;
        }

        .Panel {
          border-color: #3ca2e0 !important;
        }
      `}</style>
    </Head>
  </header>
)
