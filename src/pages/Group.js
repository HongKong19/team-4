import React from 'react';

import HeadBar from '../components/HeadBar';
import TailBar from '../components/TailBar';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
        marginLeft: "10%",
        marginTop: "2%"
    },
    anchor: {
        textDecoration: "none",
        color: "inherit"
    }
}));

export default function Group(){
    const c = useStyles();
    const run = require('../assets/run.jpg');
    const family = require('../assets/family.jpg');
    const hiking = require('../assets/hiking.jpg');

    const yoga = require('../assets/yoga.png');
    const med = require('../assets/med.jpg');
    const taig = require('../assets/taig.jpg');

    const GroupCard = (type, imageurl)=> (<Grid item xs={12} md={3}>
                    <Card className={c.card}>
                        <CardActionArea>
                            <a href="/groupdetail" className={c.anchor}>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={imageurl}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {type}
                                </Typography>
                                </CardContent>
                            </a>
                        </CardActionArea>
                    </Card>
                </Grid>);

    return (
        <div>
            <HeadBar/>
            <Grid container className={c.root} spacing={2} justify="center">
                <Grid item xs={12} className={c.title}>
                    <Typography gutterBottom variant="h5" component="h2">Your groups:</Typography>
                </Grid>

                {GroupCard("Family", family)}
                {GroupCard("Running Club", run)}
                {GroupCard("Hiking Club", hiking)}

                <Grid item xs={12} className={c.title}>
                    <Typography gutterBottom variant="h5" component="h2">Suggested groups:</Typography>
                </Grid>

                {GroupCard("Yoga Club", yoga)}
                {GroupCard("Meditation Club", med)}
                {GroupCard("Tai Chi Club", taig)}
                
            </Grid>
            <TailBar/>
        </div>
    );
}