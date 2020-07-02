import React, { Component } from 'react';
import News from '../containers/News'
import Login from '../presentation/Login';

class Home extends Component {
    render() {
        return (
            <div>
                <div> Welcome to MadOwlNews.com </div>
                <div>
                    <News />
                </div>
            </div>
        )
    }
}

export default Home;