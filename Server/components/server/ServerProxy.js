var AbstractObserver = require('webSocketRouter').AbstractObserver;

var ServerProxy = new AbstractObserver();

/**
 * Return list of listened events
 * @returns {Array}
 */
ServerProxy.getEvents = function() {
    return [
        'pushRequest',
        'init'
    ];
};

/**
 * Load the component
 * @param {Function} callback
 */
ServerProxy.load = function(callback) {

    var Server = require('./Server');
    this._instance = new Server();
    callback();

};

module.exports = ServerProxy;