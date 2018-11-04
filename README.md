# Repos from Github

a showcase app, using node js in the backend and react in the frontend.

Main reason to use backend at all was to securely store github token in memory on the server side.

## How to start

The below command will start both, backend (at port 5000) and frontend (at 3000)

```
npm run dev

```

Just visit http://localhost:3000 to see the app.

notice: you change github uri, for example if it changes or github releases some new api version
as well as a token for making more requests.

you could use a dev.js file with module exports of githubUri and githubApiKey, or by export following envs:
```
export GITHUB_URI = 'https://api.github.com'
export githubApiKey = '124256476abcdef7546352453647'
```

for easier development I recommend creating a dev.js file within /config, which is already ignored by git:


## How to build the frontend part

to create the bundle write:

```
npm run build
```