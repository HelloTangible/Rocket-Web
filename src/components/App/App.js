/* global __PARSED__ */
import React, { Component, PropTypes } from 'react'
import emptyFunction from 'fbjs/lib/emptyFunction'
import { IntlProvider, addLocaleData } from 'react-intl'
import $ from 'jquery'
import s from './App.css'
import style from '../../common/styles/bootstrap.scss'
import Header from '../Header'
import Sidebar from '../Sidebar'
import englishMessages from '../../../languages/en.json'
import en from 'react-intl/locale-data/en'

import AuthService from '../../utils/AuthService'
const envGlobal = __PARSED__

const auth = new AuthService(envGlobal.AUTH0_CLIENT_ID, envGlobal.AUTH0_DOMAIN)

addLocaleData([...en]);

const langMessage = {
  'en': englishMessages
}

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      setTitle: PropTypes.func,
      setMeta: PropTypes.func,
      getProfile: PropTypes.func
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
    getProfile: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      message: englishMessages
    }
  }

  getChildContext() {
    const context = this.props.context
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
      getProfile: auth.getProfile
    }
  }

  componentWillMount() {
    const { insertCss } = this.props.context
    this.removeCss = insertCss(s)
    insertCss(style)
  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  componentWillUpdate() {
    let ele =  document.querySelector('section')
    if (ele) {
      ele.scrollTop = 0
    }
  }

  componentWillUnmount() {
    this.removeCss()
  }


  render() {
    return (!this.props.error && this.props.header) ? (
            <IntlProvider locale={this.state.lang} messages={this.state.message}>
              <div className={`dashboard-page ${s.dashboardPage}`}>
                <Header auth={auth} />
                <Sidebar auth={auth} />
                <section id={s.bodyContainer} className={s.uiView}>
                  {this.props.children}
                </section>
              </div>
          </IntlProvider>
    ) :(
        this.props.children
    )
  }

}

export default App
