import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import style from '../layouts/Layout.css';

class Layout extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>MadOwlNews.com - Breaking news about Mad Owls</h1>
                    <div></div>
                </div>
                <div>
                    <div>
                        <ul id="menu">
                            <li><Link to={'/'} >Home</Link></li>
                            <li><Link to={'/about'} >About</Link></li>
                            <li><Link to={'/user'}>Login</Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;