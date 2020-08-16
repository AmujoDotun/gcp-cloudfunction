const format = require('./dateFormatter');

exports.helloHttp = function helloHttp(req, res)
{
    res.status(200).send(format.dateFortter());
}

exports.psHelloPuSub = function psHelloPuSub(event, callback)
{
    console.log(`Hello PubSub ${format.dateFortter()}`);
    callback();
}

exports.psHelloStorage = function psHelloStorage(event, callback)
{
    console.log(`Hello Storage bucket ${format.dateFortter()}`);

    callback();
}