const Session = require('../models/sessionModel.js');

const cookieController = {};

cookieController.setCookie = async (req, res, next) => {
  res.cookie('cookieId', Math.floor(Math.random() * 1000).toString())
//   try {
//     await Session.create({cookieId: newCookie, })
//   }
}

module.exports = cookieController;