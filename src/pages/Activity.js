import React from 'react';

import Timetable from 'react-timetable-events';
import moment from "moment";

import HeadBar from '../components/HeadBar'
import TailBar from '../components/TailBar'

export default class User extends React.Component{
  constructor(props){
    super(props);
    this.state={
      "nextActivity": {
        Today: [
        {
          id: 2,
          name: 'Running',
          type: 'custom',
          startTime: moment('2018-02-22T12:30:00'),
          endTime: moment('2018-02-22T14:30:00'),
          location: "Home"
        },
        {
          id: 3,
          name: 'Yoga',
          type: 'custom',
          startTime: moment('2018-02-22T16:30:00'),
          endTime: moment('2018-02-22T18:45:00'),
          location: "Home"
        }
      ]},

      "todayActivityList": {
        Today: [
          {
            id: 1,
            name: 'Hiking',
            type: 'custom',
            startTime: moment('2018-02-23T07:30:00'),
            endTime: moment('2018-02-23T10:00:00'),
            location: "Home"
          }
        ]
      },

      "activityList": {
        Today: [
          {
            id: 1,
            name: 'Hiking',
            type: 'custom',
            startTime: moment('2018-02-23T07:30:00'),
            endTime: moment('2018-02-23T10:00:00'),
            location: "Home"
          }
        ]
      },



      showTomorrow: true
    }

    this.renderEvent = this.renderEvent.bind(this)
    this.ToNextDay = this.ToNextDay.bind(this)
    this.ToToday = this.ToToday.bind(this)
  }

  renderEvent(event, defaultAttributes, styles) {
    return (
      <div {...defaultAttributes}
           title={event.name}
           key={event.id}>
        <span className={styles.event_info}>{ event.name }</span>
        <span className={styles.event_info}>
          { event.startTime.format('HH:mm') } - { event.endTime.format('HH:mm') }
        </span>
        <span className={styles.event_info}>
          { event.location }
        </span>
      </div>
    )
  }

  ToNextDay(){
    this.setState({
      activityList: this.state.nextActivity,
      showTomorrow: false
    });
  }

  ToToday(){
    this.setState({
      activityList: this.state.todayActivityList,
      showTomorrow: true
    });
  }

  render() {
    return (
      <div className="App">
        <HeadBar/>
        {this.state.showTomorrow ? <button  onClick={this.ToNextDay}>Tomorrow</button> : <button onClick={this.ToToday}>Back</button>}
        <Timetable events={this.state.activityList} renderEvent={this.renderEvent}/>
        <TailBar/>
      </div>
    );
  }
}
