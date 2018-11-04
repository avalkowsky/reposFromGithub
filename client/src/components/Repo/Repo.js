import React from 'react';
import _ from 'lodash'
import './styles.less';

const CALL_TO_ACTIONS = ['go', 'dig it', 'explore', 'view', 'see it'];

/**
 * Represents a row with repository details.
 * @props
 * @param {string} name - The github users name whose repositories was downloaded.
 * @param {string} description - Repository description.
 * @param {string} updatedAt - Last update date of the repository.
 * @param {string} link - Link to github repository.
 */
export default function Repo({name, description, updatedAt, link}) {

    return (
        <tr className="row">
            <td>{name}</td>
            <td>{description || 'no description provided'}</td>
            <td>{(new Date(updatedAt)).toDateString()}</td>
            <td><a href={link}>{CALL_TO_ACTIONS[_.random(0, CALL_TO_ACTIONS.length - 1)]}!</a></td>
        </tr>
    )
};