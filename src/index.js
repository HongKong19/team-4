import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Router pages import
import User from './pages/User';
import Activity from './pages/Activity';
import Goal from './pages/Goal';
import Group from './pages/Group';
import Profile from './pages/Profile';
import GroupDetail from './pages/GroupDetail';
import History from './pages/History';

render(
    <Router>
        <div>
            <Route path="/" exact component={User}/>
            <Route path="/activity" exact component={Activity}/>
            <Route path="/goal" exact component={Goal}/>
            <Route path="/group" exact component={Group}/>
            <Route path="/groupdetail" exact component={GroupDetail}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/history" exact component={History}/>
        </div>
    </Router>,
    document.getElementById('root')
);