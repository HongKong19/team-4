import React from 'react';

import HeadBar from '../components/HeadBar';
import TailBar from '../components/TailBar';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
    card: {
        minWidth: "100px",
        minHeight: "150px",
        margin: "5%"
    },
    title: {
        marginTop: "2%",
        textAlign: "center"
    },
    coverImg: {
        maxWidth: '200px',
        marginBottom: "2%"
    },
    titleReminderName: {
        marginTop: "1%",
        fontSize: "20px"
    },
    titleReminderTime: {
        marginTop: "1%",
        fontSize: "15px"
    },
    cardReminder: {
        minHeight: '50px',
        marginTop: "2%",
        border: "1px solid #3d5afe"
    }
}));

export default function GroupDetail(){
    const c = useStyles();
    const run = require('../assets/hiking.jpg');

    const FutureEventCard = (name, timedate) => (
        <Card className={c.cardReminder}>
            <Typography className={c.titleReminderName} gutterBottom>
                {name}
            </Typography>
            <Typography className={c.titleReminderTime} gutterBottom>
                {timedate}
            </Typography>
        </Card>
    );
    return (
        <div>
            <HeadBar/>
            <Grid container className={c.root} spacing={2} justify="center">
                <Grid item xs={6} className={c.title}>
                    <img className={c.coverImg} src={run}></img>
                    <Typography gutterBottom variant="h4" component="h1">
                        Hiking Club
                    </Typography>
                    <Typography gutterBottom className={c.titleReminderName} component="h1">
                        Welcoming to Hong Kong's largest organised hiking group with 400 members, 
                        scheduling over 80 events a year.
                    </Typography>

                    {FutureEventCard("Victoria Peak", "9 Oct, 2019 12:00")}
                    {FutureEventCard("Dragon's Back", "5 Nov, 2019 14:00")}
                    {FutureEventCard("Tai Mo Shan", "21 Dec, 2019 13:00")}

                </Grid>
                <Grid item md={12}>

                </Grid>
            </Grid>
            <TailBar/>
        </div>
    );
}