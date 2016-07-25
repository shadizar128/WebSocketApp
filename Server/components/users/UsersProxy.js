var AbstractObserver = require('webSocketRouter').AbstractObserver;

var UsersProxy = new AbstractObserver();

/**
 * Return list of listened events
 * @returns {Array}
 */
UsersProxy.getEvents = function() {
    return [
        'createUsers',
        'updateUsers',
        'deleteUsers'
    ];
};

/**
 * Load the component
 * @param {Function} callback
 */
UsersProxy.load = function(callback) {

    var Users = require('./Users');
    this._instance = new Users();
    callback();

};

module.exports = UsersProxy;