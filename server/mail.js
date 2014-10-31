var nodemailer = require('nodemailer');

module.exports = function(req, res, next) {

  if (req.body.from === undefined || req.body.message === undefined ) {
      console.log(req.body);
     return res.json({ result: "error" });
  }
  else {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'pellan.web@gmail.com',
          pass: 'M2djHApZy2QMsM'
      }
    });
    transporter.sendMail({
        from: req.body.from,
        to: 'jonaslergell@gmail.com',
        subject: 'contact form sofiapellgard.se',
        text: req.body.from + '\n' + req.body.message
    }, function(err, info) {
      if(err) {
        return res.json(err);
      }
      return res.json(info);
      
    });
  }

}