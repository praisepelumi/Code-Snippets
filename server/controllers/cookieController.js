const Session = require('../models/sessionModel.js');

const cookieController = {};

// cookieController.setCookie = async (req, res, next) => {
//   res.cookie('cookieId', Math.floor(Math.random() * 1000).toString());
//   return next();
// //   try {
// //     await Session.create({cookieId: newCookie, })
// //   }
// }

// cookieController.setSSIDCookie = (req, res, next) => {
//   res.cookie("ssid", res.locals.user, { httpOnly:true });
//   return next();

// };

module.exports = cookieController;