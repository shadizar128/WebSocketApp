var AbstractObserver = require('webSocketRouter').AbstractObserver;

var ProtectedEntitiesProxy = new AbstractObserver();

/**
 * Return list of listened events
 * @returns {Array}
 */
ProtectedEntitiesProxy.getEvents = function() {
    return [
        'createProtectedEntities',
        'updateProtectedEntities',
        'deleteProtectedEntities',
        'validateProtectedEntities'
    ];
};

/**
 * Load the component
 * @param {Function} callback
 */
ProtectedEntitiesProxy.load = function(callback) {

    var ProtectedEntities = require('./ProtectedEntities');
    this._instance = new ProtectedEntities();
    callback();

};

module.exports = ProtectedEntitiesProxy;