import React from 'react';

import HeadBar from '../components/HeadBar';
import TailBar from '../components/TailBar';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    control: {
        padding: theme.spacing(2),
    },
    paper: {
        minWidth: "100px",
        minHeight: "100px",
        margin: "5%"
    }
}));

export default function Group(){
    const c = useStyles();
    return (
        <div>
            <HeadBar/>
            <Grid container className={c.root} spacing={2} justify="center">
                <Grid item xs={5}>
                </Grid>
            </Grid>
            <TailBar/>
        </div>
    );
}