const EventEmmitter = require('events');

const Logger  = require('./loggerclass.js');
const logger = new Logger();

logger.on('logging', (args) => {
    console.log('Message is : ', args)
})

logger.log('Test message');
