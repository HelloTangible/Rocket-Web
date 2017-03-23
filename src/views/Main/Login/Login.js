import React, { PropTypes as T } from 'react'
import {ButtonToolbar, FormGroup, FormControl, Button} from 'react-bootstrap'
import AuthService from 'utils/AuthService'
import Rocket from '../../../styles/images/rocket-white.png'
import s from './Login.css'

export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  }

  constructor(props) {
    super(props)
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  componentWillMount() {
    document.title = 'Rocket - Login'
  }

  render() {
    const { auth } = this.props
    return (
      <div className={`login-page animate ${s.loginPage}`}>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4">
            <img src={Rocket} alt="rocket" className="user-avatar" />
            <h1>Rocket, by Tangible </h1>
            <br />
            <button
              type="submit"
              className={`btn btn-white btn-outline btn-lg btn-rounded progress-login
                progress-button ${s.btn}`} onClick={auth.login.bind(this)}
              data-style="fill" data-horizontal
            >Log in</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
