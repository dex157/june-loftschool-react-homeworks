import './AppRouter.css';
import React, {Component} from 'react';
import Search from 'components/Search';
import ShowPage from 'components/ShowPage';
import {Switch, Route, withRouter} from 'react-router-dom';

export class AppRouter extends Component {
    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route path='/' component={Search} exact/>
                    <Route path='/shows/:id' component={ShowPage}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(AppRouter);