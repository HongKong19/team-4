import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
            <div>
            <Grid style={{ textAlign:"center"}} item xs={12} justify="space-around">
                <Typography>Today's Goal</Typography>
            </Grid>
            <tbody>
                <tr>
                <td style={{ width: "20%", marginTop: "20px", paddingTop: "20px"}} class="today">
                    <CircularProgressbar value={this.state.todayGoal.percentage} text={`${this.state.todayGoal.percentage}%`} />
                </td>
                <td style={{ textAlign:"left"}}><Typography>{this.state.todayGoal.target}</Typography></td>
                </tr>
            </tbody>
            <Grid style={{ textAlign:"center"}} item xs={12} justify="space-around">
                <Typography>Our Short-term Goal</Typography>
            </Grid>
            <tbody>
                <tr>
                <td style={{ width: "20%", marginTop: "20px", paddingTop: "20px"}} class="today">
                    <CircularProgressbar value={this.state.STGoal.percentage} text={`${this.state.STGoal.percentage}%`} />
                </td>
                <td style={{ textAlign:"left"}}><Typography>{this.state.STGoal.target}</Typography></td>
                </tr>
            </tbody>
            <Grid style={{ textAlign:"center"}} item xs={12} justify="space-around">
                <Typography>Our Long-term Goal</Typography>
            </Grid>
            <tbody>
                <tr>
                <td style={{ width: "20%", marginTop: "20px", paddingTop: "20px"}} class="today">
                    <CircularProgressbar value={this.state.LTGoal.percentage} text={`${this.state.LTGoal.percentage}%`} />
                </td>
                <td style={{ textAlign:"left"}}><Typography>{this.state.LTGoal.target}</Typography></td>
                </tr>
            </tbody>
            </div>
            <TailBar/>
          </div>
        );
    }
}

