import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const USERNAME_CUSTOM_ATTR = 'data-user';
const LAST_UPDATED_CUSTOM_ATTR = 'data-update';

const reposFromStaticHtmlPage = document.querySelector('#root');

const username = reposFromStaticHtmlPage.getAttribute(USERNAME_CUSTOM_ATTR);
const lastUpdated = reposFromStaticHtmlPage.getAttribute(LAST_UPDATED_CUSTOM_ATTR);

/**
 * This is the place where react app is hooked to the DOM
 *
 * Important notice here is that properties {@USERNAME_CUSTOM_ATTR and @LAST_UPDATED_CUSTOM_ATTR} are extracted from
 * the initial page DOM, and treated as input parameters of the 'Repos from Github' app
 *
 * @props
 * @param {string} USERNAME_CUSTOM_ATTR - custom html data-* attribute (data-user at the time) used to extract username.
 * @param {string} LAST_UPDATED_CUSTOM_ATTR - custom html data-* attribute (data-update at the time) used to extract last update date.
 */
ReactDOM.render(
    <App username={username} lastUpdated={lastUpdated}/>,
    reposFromStaticHtmlPage
);