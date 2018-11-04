import React, { Component } from 'react';
import './styles.less';
import Repo from '../Repo/Repo';
import axios from 'axios';
import _ from 'lodash';

/**
 * Represents a table of repositories.
 * @props
 * @param {string} username - The github users name whose repositories will be downloaded.
 * @param {string} lastUpdated - Updated property of github API, representing last update date.
 */
export default class Repos extends Component {
    constructor(props){
        super(props);

        this.state = {
            repos: [],
            error: false
        }
    }

    async componentDidMount() {
        try {
            const response = await this.fetchRepos();
            this.setState(
                {
                    repos : response.data,
                    error: false
                }
            )
        } catch (e) {
            this.setState(
                {
                    error: true
                }
            )
        }

    }

    fetchRepos() {
        const { username, lastUpdated } = this.props;
        return axios.get(`/api/users/${username}/repos?lastUpdated=${lastUpdated}`);
    }

    render() {
        const { repos, error } = this.state;

        const repoList = repos.map((repo, index) => <Repo {...repo} key={index}/>);

        if (_.isEmpty(repos)) {
            if (error) {
                return <p  className="placeholder error">Sorry for that, but a problem occurred. Try to reload the page.</p>
            } else {
                return <p  className="placeholder">No details to show yet</p>
            }
        } else {
            return (
                <table className="container">
                    <tbody>
                        <tr className="row">
                            <td>name</td>
                            <td>description</td>
                            <td>updated</td>
                            <td>link</td>
                        </tr>
                        {repoList}
                    </tbody>
                </table>
            )
        }

    }
};