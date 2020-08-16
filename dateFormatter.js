const moment = require('moment');


exports.dateFortter = ()=>
{
   return moment().format('MM Do YYY, h:mm:ss a');
}