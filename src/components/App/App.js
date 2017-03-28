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
      setLang: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    setMeta: PropTypes.func.isRequired,
    setLang: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      message: englishMessages,
    }
  }

  getChildContext() {
    const context = this.props.context
    return {
      insertCss: context.insertCss || emptyFunction,
      setTitle: context.setTitle || emptyFunction,
      setMeta: context.setMeta || emptyFunction,
      setLang: lang => {
        let textMessage = langMessage[lang]
        this.setState({
          lang,
          message: textMessage
        })
      }
    }
  }

  componentWillMount() {
    const { insertCss } = this.props.context
    this.removeCss = insertCss(s)
    insertCss(style)
  }

  componentDidMount() {
    window.scrollTo(0,0)
    let setLang = window.localStorage.getItem("language123")
    if (!setLang) {
        setLang = 'en'
    }
    this.setState({
      lang: setLang,
      message: langMessage[setLang],
    })
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
                <Sidebar />
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
