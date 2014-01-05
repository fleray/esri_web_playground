//   Code under MIT License (see main license file).
//   Email : fabrice.leray.dev(at)gmail(dot)com
//   Copyright (c) 2013 Fabrice Leray
define(["require", "exports"], function(require, exports) {
    var Subscription = (function () {
        function Subscription(id, callback) {
            this.id = id;
            this.callback = callback;
        }
        return Subscription;
    })();
    exports.Subscription = Subscription;

    var Message = (function () {
        function Message(message) {
            this.message = message;
            this._subscriptions = [];
            this._nextId = 0;
        }
        Message.prototype.subscribe = function (callback) {
            var subscription = new Subscription(this._nextId++, callback);
            this._subscriptions[subscription.id] = subscription;
            return subscription.id;
        };

        Message.prototype.unSubscribe = function (id) {
            this._subscriptions[id] = undefined;
        };

        Message.prototype.notify = function (payload) {
            var index;
            for (index = 0; index < this._subscriptions.length; index++) {
                if (this._subscriptions[index]) {
                    this._subscriptions[index].callback(payload);
                }
            }
        };
        return Message;
    })();
    exports.Message = Message;
});
