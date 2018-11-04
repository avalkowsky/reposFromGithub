import React from 'react';
import Repos from './Repos/Repos';
import './styles.less'
import coolLogo from '../img/coollogo.png';

/**
 * Represents the app shell which contains of image, header and repositories table.
 * @props
 * @param {string} username - The github users name whose repositories will be downloaded.
 * @param {string} lastUpdated - Updated property of github API, representing last update date.
 */
export default function App({username, lastUpdated}) {

    return (
        <React.Fragment>
            <header>
                <img src={coolLogo}/>
            </header>
            <h4 className="usernameHeader"><span>{username}</span> repositories: </h4>
            <Repos {...{username, lastUpdated}}/>
        </React.Fragment>
    )
};