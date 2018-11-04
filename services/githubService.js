const axios = require('axios');
const {githubUri = 'https://api.github.com', githubApiKey} = require('../config/envs');
const {ShallowRepository} = require('../models/ShallowRepository');

const LAST_DAYS_QUANTITY = 30;

/**
 * Used when no last updated date was provided, by now it's made as 30 days before today.
 */
const getDefaultLastUpdatedDate = () => {
    const date = new Date();

    date.setDate(date.getDate() - LAST_DAYS_QUANTITY);

    return date;
};

/**
 * Filtering function used to return only repositories updated after given date
 *
 * @props
 * @param {string} updatedAt - The date in the github API response.
 * @param {string} lastUpdated - The requested last update date.
 */
const updatedBefore = (updatedAt, lastUpdated) => {

    const updatedAtTime = (new Date(updatedAt)).getTime();
    const lastUpdatedTime = (new Date(lastUpdated)).getTime();

    return lastUpdatedTime < updatedAtTime;
};

/**
 * Makes API call to github, using the API key and URI from environment variables.
 *
 * @props
 * @param {string} username - The github users name whose repositories will be downloaded.
 * @param {string} lastUpdated - Last update date of the repository.
 */
const getUserRepos = async (username, lastUpdated = getDefaultLastUpdatedDate()) => {

    try {

        const response = await axios.get(`${githubUri}/users/${username}/repos?sort=updated`, {
            headers: {
                Accept: 'application/vnd.github.mercy-preview+json',
                Authorization: `Basic ${githubApiKey}`
            }
        });

        if (response.status === 200) {
            return response.data
                .filter(({updated_at}) => updatedBefore(updated_at, lastUpdated))
                .map((githubRepoObject) => new ShallowRepository(githubRepoObject));
        }

    } catch (e) {
        if (e.code === 'ENOTFOUND') {
            console.error('Cannot reach GitHub due to backend misconfiguration. Original error: ');
            console.error(e);
            return {message: 'Cannot reach GitHub due to backend misconfiguration.'};
        } else {
            const {message} = e;
            return {message};
        }

    }

};

module.exports = {
    getUserRepos
};