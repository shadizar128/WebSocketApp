var EventsManager = require('webSocketRouter').EventsManager;
var Context = require('webSocketRouter').Context;

// instantiate events manager
var manager = new EventsManager();

// load default observers
var observers = require('./config/server/observers.js');
for (var i in observers) {

    if (!observers.hasOwnProperty(i)) {
        continue;
    }

    // register each observer event
    observers[i].getEvents().forEach(function(eventName) {
        manager.register(eventName, observers[i]);
    });

}

// fire event to initialize components
manager.fireEvent('init', new Context());

// fire event after initialization is done
manager.fireEvent('afterInit', new Context());

console.log('done');