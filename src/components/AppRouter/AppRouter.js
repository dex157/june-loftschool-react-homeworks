import React, {Component} from 'react';

import Search from '../Search';

class AppRouter extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Search/>
                    <div className="t-search-result sc-htpNat kRtOTp"></div>
                </div>
            </div>
        );
    }
}

export default AppRouter;