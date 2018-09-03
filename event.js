const EventEmmitter = require('events');
const emmitterObj = new EventEmmitter(); 

emmitterObj.on('messageLog', ( arg) => {
    console.log('Test Message ' + arg)
});

emmitterObj.emit('messageLog', { message : 'Emmitting the event' });

