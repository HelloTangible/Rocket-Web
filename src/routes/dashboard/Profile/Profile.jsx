import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Panel } from 'react-bootstrap';
import s from './Profile.css';

import cover from '../../../common/images/profile-cover.jpg';
import flatAvatart from '../../../common/images/flat-avatar.png';
import colorful4 from '../../../common/images/colorful4.jpg';

const title = 'Profile';

class Profile extends Component {
  static contextTypes = {
    setTitle: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.context.setTitle(title)
  
    this.state = {
      profile: this.context.getProfile()
    }


  }

  render() {
    return (
      <div className="animate">
        <div>
          <div className={`cover-wrapper ${s.coverWrapper}`}>
            <div
              className={`cover-photo ${s.coverPhoto}`}
              style={{ backgroundImage: `url(${cover})` }}
            >
              <div className={`name-desg ${s.nameDesg}`}>
                <h3>
                  {this.state.profile.name}
                </h3>
              </div>
            </div>
            <div className={`profile-photo-warp ${s.profilePhotoWrapper}`}>
              <img
                className={`profile-photo img-responsive img-circle ${s.profilePhoto}`}
                src={this.state.profile.picture} alt=""
              />
            </div>
            <div className={`foobar ${s.foobar}`}>
              <a href=""><i className={`fa fa-heart text-danger ${s.faFooBar}`} /> 443</a>
                &nbsp;&nbsp;&nbsp;
              <a href=""><i className={`fa fa-users ${s.faFooBar}`} /> 443</a>
              <span className={`probutton ${s.probutton}`}>
                <button
                  type="button"
                  className={`btn ${s.btnProButton} ${s.btnBordered} ${s.btnPrimary}`}
                >
                Follow
                </button>
              </span>
              <span className={`links pull-right ${s.links}`}>
                <a href=""><i className={`fa fa-twitter ${s.faFooBar} ${s.twitter}`} /></a>
                <a href=""><i className={`fa fa-facebook ${s.faFooBar} ${s.facebook}`} /></a>
                <a href=""><i className={`fa fa-google-plus ${s.faFooBar} ${s.googlePlus}`} /></a>
                <a href=""><i className={`fa fa-github ${s.faFooBar} ${s.github}`} /></a>
              </span>
            </div>
          </div>     
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Profile)
