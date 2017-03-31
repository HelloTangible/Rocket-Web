/* global document */
import React, { PropTypes } from 'react'
import Link from 'next/link'

export default class Error extends React.Component {
  title = 'Error'
  content = 'Sorry, a critical error occurred on this page.'
  errorMessage = null
  errorCode = 404
  errorStack = null

  static getInitialProps ({ res, jsonPageRes }) {
    this.errorStack = res
    
    const statusCode = res ? res.statusCode : (jsonPageRes ? jsonPageRes.status : null)
    return { statusCode }
  }

  static propTypes = {
    statusCode: PropTypes.number
  }

  componentWillMount () {
    if (this.props.statusCode === 404) {
      this.title = 'Page Not Found'
      this.content = 'Sorry, the page you were trying to view does not exist.'
      this.errorCode = this.props.statusCode
    } else if (process.env.NODE_ENV !== 'production') {
      this.errorMessage = <p>{this.errorStack}</p>
    }
    
    if (typeof document !== 'undefined') document.title = this.title
  }

  render () {
    return (
      <div className='error-page animate'>
        <style jsx>{`
          .error-page {
            font-family: 'Open Sans', sans-serif;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: auto;
            background: #3ca2e0;
            text-align: center;
            color: #fff;
            padding: 3em;
          }

          h1 {
            font-weight: 300;
            font-size: 36px;
            margin-top: 20px;
            margin-bottom: 10px;
          }

          small {
            color: rgba(255,255,255,0.7);
          }
        `}</style>
        <div className='row'>
          <div>
            <Link href='/'>
              <img src='../static/images/rocket-white.png' alt='rocket' className='user-avatar' />
            </Link>
            <h1>Rocket, by Tangible </h1>
            <br />
            <div>
              <h1>{this.errorCode}</h1>
              <p>{this.content}</p>
              <div>{this.errorMessage}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
