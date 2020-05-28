const nodemailer = require("nodemailer");
const fs = require('fs');
var colorOutside
    , colorInsideS = 'bl'
    , battery = 100
    , fullDrive = 1
    , sport = 0
    , autoPilot = 1
    , skin = 1
    , firstName = 'Maxim'
    , lastName = "Maidan"
    , phone = "+380 67 913 15 06"
    , email = "maksym.maidan.kn.2017@lpnu.ua"
    , cost = 53000;

var data = "Клієнт: <br> Maxim Maidan <br> +380 67 913 15 06<br>maksym.maidan.kn.2017@lpnu.ua<br>cost = 53000<br>colorInsideS = 'bl'<br> colorOutside = 'bl'<br>battery = 100<br>fullDrive = 1<br>sport = 0<br>autoPilot = 1";
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'zhytelselakulyava001@gmail.com',
            pass: 'MAX80300KYmin'
        }
    });
const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
        console.log('Email sent: ', info)
    })
}
const message = {
    from:'Client <client@gmail.com>',
    to:'maxim.prisma.maidan@gmail.com',
    subject:'New order',
    html: data
};
mailer(message);