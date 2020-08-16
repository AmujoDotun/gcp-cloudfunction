const moment = require('moment');

exports.helloHttp = function helloHttp(req, res)
{
    res.status(200).send(moment().format('MMM Do YYY, h:mm:ss a'));
}

exports.psHelloPuSub = function psHelloPuSub(event, callback)
{
    console.log(`Hello PubSub ${moment().format('MMM Do YYY, h:mm:ss a')}`);
    callback();
}

exports.psHelloStorage = function psHelloStorage(event, callback)
{
    console.log(`Hello Storage bucket ${moment().format('MM Do YYY h:mm:ss a')}`);

    callback();
}