import React, { PropTypes, Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { Button, FormGroup, FormControl } from 'react-bootstrap'
import Link from '../../components/Link'
import AuthService from '../../utils/AuthService'
import s from './Login.css'
import Rocket from '../../common/images/rocket-white.png'
import History from '../../core/history'

const title = 'Rocket - Log In'

class Login extends Component {
  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
  }

  static propTypes = {
    auth: PropTypes.instanceOf(AuthService)
  }

  constructor(props) {
    super(props);
    this.state = {
      loginID: '',
      password: '',
      isSubmitted: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillMount() {
    this.context.setTitle(title);
  }
  componentDidMount() {
    [].slice.call(document.querySelectorAll('button.progress-login'))
    .forEach((bttn) => {
      new ProgressButton(bttn, { 
        callback: (instance) => {
          let progress = 0;
          const interval = setInterval(() => {
            progress = Math.min(progress + (Math.random() * 0.1), 1);
            instance._setProgress(progress); 

            if (progress === 1) {
              instance._stop(1); 
              clearInterval(interval);
              setTimeout(() => {
                History.push('/');
              }, 500);
            }
          }, 200);
        },
      });
    });
    // [].slice.call(document.querySelectorAll('button.progress-button')).forEach((bttn) => {
    //   new ProgressButton(bttn, { //eslint-disable-line
    //     callback: (instance) => {
    //       let progress = 0;
    //       const interval = setInterval(() => {
    //         progress = Math.min(progress + (Math.random() * 0.1), 1);
    //         instance._setProgress(progress); //eslint-disable-line
    //         if (progress === 1) {
    //           instance._stop(1); // eslint-disable-line
    //           clearInterval(interval);
    //           History.push('/');
    //         }
    //       }, 200);
    //     },
    //   });
    // });
  }

  handleLogin(e) {
    //e.preventDefault();
    //return false;
    this.props.auth.login()
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
            <Button
              type="submit"
              className={`btn btn-white btn-outline btn-lg btn-rounded progress-login
                progress-button ${s.btn}`}
              data-style="fill" data-horizontal onClick={this.handleLogin}
            >Log in</Button>
          </div>
        </div>
      </div>
    );
  }
}

Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);
