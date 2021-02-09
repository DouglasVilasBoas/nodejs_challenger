const userController = require('../app/controller/User');
const repositoryController = require('../app/controller/Repository');
const repositoryStarsController = require('../app/controller/Repository_stars');
const followingController = require('../app/controller/Following');
const followerController = require('../app/controller/Follower');
const tokenController = require('../app/controller/Token');
const route = require('express').Router();


route.get('/', (req, res) => res.json({
    message: "Hello World!"
}));
 
route.post('/user', userController.create);
route.get('/user/:id', userController.store);
route.get('/user', userController.store);
route.put('/user/:id', userController.update);
route.delete('/user/:id', userController.del);


route.post('/repository', repositoryController.create);
route.get('/repository/:id', repositoryController.store);


route.post('/repository-stars', repositoryStarsController.create);
route.delete('/repository-stars/:id', repositoryStarsController.del);

route.post('/following', followingController.create);
route.get('/following/:id', followingController.store);
route.delete('/following/:id', followingController.del);

route.get('/follower/:id', followerController.store);

route.post('/authentication', tokenController.authentication);

module.exports = route;