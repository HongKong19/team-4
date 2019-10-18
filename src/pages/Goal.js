import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import HeadBar from '../components/HeadBar'
import TailBar from '../components/TailBar'

export default class Goal extends React.Component{
    constructor(props){
      super(props);
      this.state={
          todayGoal: {
            percentage: 80,
            target: "10000 steps"
          },
          STGoal: {
            percentage: 50,
            target: "lose 5 kg"
          },
          LTGoal: {
            percentage: 25,
            target: "lose 20 kg"
          }
      }
    }

    render() {
        return (
          <div className="App">
            <HeadBar/>
            <Grid style={{ textAlign:"center"}} item xs={12} justify="space-around">
                <Paper>Today's Goal</Paper>
            </Grid>
            <tbody>
                <tr>
                <td style={{ width: "20%", marginTop: "20px", paddingTop: "20px"}} class="today">
                    <CircularProgressbar value={this.state.todayGoal.percentage} text={`${this.state.todayGoal.percentage}%`} />
                </td>
                <td style={{ textAlign:"left"}}>{this.state.todayGoal.target}</td>
                </tr>
            </tbody>
            <Grid style={{ textAlign:"center"}} item xs={12} justify="space-around">
                <Paper>Our Short-term Goal</Paper>
            </Grid>
            <tbody>
                <tr>
                <td style={{ width: "20%", marginTop: "20px", paddingTop: "20px"}} class="today">
                    <CircularProgressbar value={this.state.STGoal.percentage} text={`${this.state.STGoal.percentage}%`} />
                </td>
                <td style={{ textAlign:"left"}}>{this.state.STGoal.target}</td>
                </tr>
            </tbody>
            <Grid style={{ textAlign:"center"}} item xs={12} justify="space-around">
                <Paper>Our Long-term Goal</Paper>
            </Grid>
            <tbody>
                <tr>
                <td style={{ width: "20%", marginTop: "20px", paddingTop: "20px"}} class="today">
                    <CircularProgressbar value={this.state.LTGoal.percentage} text={`${this.state.LTGoal.percentage}%`} />
                </td>
                <td style={{ textAlign:"left"}}>{this.state.LTGoal.target}</td>
                </tr>
            </tbody>
            {/* <Grid class="st">
                <h3>Our Short-term Goal</h3>
                <CircularProgressbar value={this.state.STGoal.percentage} text={`${this.state.STGoal.percentage}%`} />
                <span>{this.state.STGoal.target}</span>
            </Grid>
            <Grid class="lt">
                <h3>Our Long-term Goal</h3>
                <CircularProgressbar value={this.state.LTGoal.percentage} text={`${this.state.LTGoal.percentage}%`} />
                <span>{this.state.LTGoal.target}</span>
            </Grid> */}
            <TailBar/>
          </div>
        );
    }
}

