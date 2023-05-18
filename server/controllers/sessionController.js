const Session = require('../models/sessionModel');

const sessionController = {};

sessionController.createSession = async (req, res, next) => {
  const session = await Session.create({ cookieId: Math.floor(Math.random() * 1000).toString()});
  console.log('SESSION!!!!!!!!!!!', session);
  res.cookie('cookieId', session.cookieId);
//   res.locals.cookie = session.cookieId;
  return next();
};

module.exports = sessionController;