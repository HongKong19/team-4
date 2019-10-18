import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction component={Link} to="/activity" label="Activity" value="activity" icon={<EventIcon />} />
        <BottomNavigationAction component={Link} to="/" label="User" value="" icon={<PersonIcon />} />
        <BottomNavigationAction component={Link} to="/group" label="Group" value="group" icon={<GroupIcon />} />
        <BottomNavigationAction component={Link} to="/goal" label="Goal" value="goal" icon={<TrackChangesIcon />} />
    </BottomNavigation>
  );
}