//   Code under MIT License (see main license file).
//   Email : fabrice.leray.dev(at)gmail(dot)com
//   Copyright (c) 2013 Fabrice Leray
define(["require", "exports", 'classes/fr.util.events/MessageManager'], function(require, exports, MessageManager) {
    var EventManager = (function () {
        function EventManager() {
            if (null !== EventManager._evtManager) {
                throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
            }
        }
        EventManager.getInstance = function () {
            if (null === EventManager._evtManager) {
                EventManager._evtManager = new EventManager();
            }
            return EventManager._evtManager;
        };

        EventManager.prototype.subscribe = function (message, callback) {
            var msg;
            msg = EventManager._messages[message] || (EventManager._messages[message] = new MessageManager.Message(message));

            return msg.subscribe(callback);
        };

        EventManager.prototype.unSubscribe = function (message, token) {
            if (EventManager._messages[message]) {
                (EventManager._messages[message]).unSubscribe(token);
            }
        };

        EventManager.prototype.publish = function (message, payload) {
            if (EventManager._messages[message]) {
                (EventManager._messages[message]).notify(payload);
            }
        };
        EventManager._evtManager = null;

        EventManager._messages = {};
        return EventManager;
    })();
    exports.EventManager = EventManager;
});
