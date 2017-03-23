import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './styles.module.css'
import Rocket from '../../styles/images/rocket-white.png'

import { IntlProvider, addLocaleData } from 'react-intl'
import englishMessages from '../../../languages/en.json'
import en from 'react-intl/locale-data/en'

addLocaleData([...en]);

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      message: englishMessages,
    };
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <IntlProvider locale={this.state.lang} messages={this.state.message}>
        {children}
      </IntlProvider>
    )
  }
}

export default Container
