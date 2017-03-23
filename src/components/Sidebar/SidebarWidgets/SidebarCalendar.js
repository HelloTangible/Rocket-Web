import React, { Component } from 'react'
import FullCalendar from 'rc-calendar/lib/FullCalendar'
import Select from 'rc-select'
import moment from 'moment'
import { FormattedMessage } from 'react-intl'
// import $ from 'jquery';
// import fullcalendar from 'fullcalendar';
import s from './SidebarWidgets.css'

const now = moment()

class SidebarCalendar extends Component {
  componentDidMount () {
    // console.log('this.menuCalendar', this.menuCalendar);
    // $(this.menuCalendar).fullcalendar({
    //   contentHeight: 'auto',
    //   header: {
    //     left: 'title',
    //     right: 'prev,next',
    //     center: '',
    //   },
    // });
    // $(this.sidebarCalendar).fullcalendar();
      // $('#gaurav123').fullCalendar({
      //   contentHeight: 'auto',
      //   header: {
      //     left: 'title',
      //     right: 'prev,next',
      //     center: '',
      //   },
      // });
  }
  render () {
    return (
      <div className={s.calContainer}>
        <div className={s.calHeader}>
          <FormattedMessage
            id="fullcalendar"
            defaultMessage="Full Calendar"
          />
        </div>
        <div>
          <FullCalendar
            style={{ margin: '0px 0px', border: 'none' }}
            Select={Select}
            fullscreen={false}
            default={now}
          />
        </div>
      </div>
    )
  }
}

export default SidebarCalendar
