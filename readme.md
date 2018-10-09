# live-game-updates-express

Realtime app for following game scores and events in realtime. This app provides a backend for an admin to log in and publish updates on ongoing games, and a frontend that allows users to follow a game's progress in realtime.

View tutorial [here](https://pusher.com/tutorials/live-game-express)

## Prerequisites
- Node.js 8.10.0 or greater
- MongoDB 3.4 or higher.
- A [Pusher account](https://pusher.com/signup) and [Pusher app credentials](http://dashboard.pusher.com/)

## Getting started
Clone the project and install dependencies:

```bash
git clone https://github.com/shalvah/live-game-updates-express
cd live-game-updates-express
npm install
```

Copy the `.env.example` file to a `.env` file. Add your Pusher app credentials to this file:
```
PUSHER_APP_ID=your-app-id
PUSHER_APP_KEY=your-app-key
PUSHER_APP_SECRET=your-app-secret
PUSHER_APP_CLUSTER=your-app-cluster
```

Start your MongoDB server by running
```bash
mongo
```

Start the app by running:

```bash
npm start
```

## Built With

* [Pusher](https://pusher.com/) - APIs to enable devs building realtime features
* [Express](https://expressjs.org)
* [Vue.js](https://vuejs.org)
