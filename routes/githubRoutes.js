const githubService = require('../services/githubService');

/**
 * Represents the routes handling in the backend
 * */
module.exports = (app) => {

    app.get('/api/users/:username/repos', async (req, res) => {

        try {
            const repositories = await githubService.getUserRepos(req.params.username, req.query.lastUpdated);

            res.status(200).send(repositories);
        } catch ({message}) {
            res.status(500).send({message});
        }
    });
};