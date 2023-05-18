const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router =  express.Router();
app.use(cookieParser());

router.post('/createUser', userController.createUser, (req, res) => {
  return res.sendStatus(200);
});

router.post('/login', userController.verifyUser, sessionController.createSession, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;