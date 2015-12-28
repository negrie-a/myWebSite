var nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
var Q = require('q');
var mailConfig = {
    "defaultFrom" : "Aurelien <aurelienegrier@hotmail.fr>",
    "connect" : {
        "aurelienegrier@hotmail.fr" : {
            "service": 'Hotmail',
            "auth": {
                "user": "aurelienegrier@hotmail.fr",
                "pass": "*WEO5_LR"
            }
        }
    },
    "optionsHtml" : {
        "viewEngine" : {
            "extname" : ".hbs",
            "layoutsDir" : "server/views/email/",
            "partialsDir" : "server/views/email/partials/"
        },
        "viewPath" : "server/views/email/",
        "extName" : ".hbs"
    }
}

var transporter = {};

var self = this;

Object.keys(mailConfig.connect).forEach(function (from) {     
    transporter[from] = nodemailer.createTransport(mailConfig.connect[from]);
    transporter[from].use('compile', hbs(mailConfig.optionsHtml));
});

this.getConfig = function (index) {
    return mailConfig[index];
}

this.getTransport = function (emailUse) {
    return transporter[emailUse];
}

this.sendMail = function (options) {
    var deferred = Q.defer();
    var emailUse = null;

    if (options.from.indexOf("<") != -1)
        emailUse = options.from.substring(options.from.indexOf("<") + 1, options.from.indexOf(">"));
    else
        emailUse = options.from;

    self.getTransport(emailUse).sendMail(options, function (err) {
        if (err) 
            deferred.reject(err);
        else 
            deferred.resolve();
    });
    return deferred.promise;
}

module.exports = this;