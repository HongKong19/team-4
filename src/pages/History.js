import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HeadBar from '../components/HeadBar';
import TailBar from '../components/TailBar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
    cardReminder: {
        minHeight: '50px',
        marginTop: "3%",
        border: "1px solid #3d5afe",
        textAlign: "center"
    },
    titleReminderName: {
        fontSize: "18px",
        fontWeight: 700
    },
    titleReminderTitle: {
        fontSize: "16px"
    }
}));

export default function History(){
    const c = useStyles();
    const HistoryCard = (name, timedate) => (
        <Grid item xs={12}>
            <Card className={c.cardReminder}>
                <Typography className={c.titleReminderName} gutterBottom>
                    {name}
                </Typography>
                <Typography className={c.titleReminderTime} gutterBottom>
                    <CheckIcon/>
                    {timedate}
                </Typography>
            </Card>
        </Grid>
    );

    const HistoryCardCross = (name, timedate) => (
        <Grid item xs={12}>
            <Card className={c.cardReminder}>
                <Typography className={c.titleReminderName} gutterBottom>
                    {name}
                </Typography>
                <Typography className={c.titleReminderTime} gutterBottom>
                    <ClearIcon/>
                    {timedate}
                </Typography>
            </Card>
        </Grid>
    );

    return (
        <div>
            <HeadBar/>
                <Grid container space={2}>
                    {HistoryCardCross("20 Jan, 2020", "[Swimming Goal] 2.21 hrs")}
                    {HistoryCardCross("19 Jan, 2020", "[Water Goal] 2.32L")}
                    {HistoryCard("13 Jan, 2020", "[Stand Goal] 43 minutes")}
                    {HistoryCard("9 Jan, 2020", "[Diet Goal] 1231 kcals")}
                    {HistoryCard("19 Oct, 2019", "[Running Goal] 7.21 km")}
                    {HistoryCard("9 Oct, 2019", "[Move Goal] 1000 kcals")}
                </Grid>
            <TailBar/>
        </div>
    );
}