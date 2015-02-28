var nodemailer = require('nodemailer');
var password = require('./config').password;
var email = require('./config').email;

module.exports = function(req, res, next) {

  if (req.body.name === '' || req.body.email === '' || req.body.message === '' ) {
      console.log(req.body);
     return res.json({ result: "error" });
  }
  else {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: email,
          pass: password
      }
    });
    transporter.sendMail({
        from: req.body.email,
        to: email,
        subject: 'contact form sofiapellgard.se',
        text: req.body.email + '\n' + req.body.message
    }, function(err, info) {
      if(err) {
        return res.json(err);
      }
      return res.json(info);
      
    });
  }

}