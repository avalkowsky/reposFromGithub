/**
 * Represents the shallow object of repository containing only the fields required by the UI.
 * @props
 * @param {string} name - The github users name whose repositories was downloaded.
 * @param {string} description - Repository description.
 * @param {string} updatedAt - Last update date of the repository.
 * @param {string} link - Link to github repository.
 */
class ShallowRepository {
    constructor({name, description, updated_at, clone_url}) {
        this.name = name;
        this.description = description;
        this.updatedAt = updated_at;
        this.link = clone_url;
    }
}

module.exports = {ShallowRepository};