//   Code under MIT License (see main license file).
//   Email : fabrice.leray.dev(at)gmail(dot)com
//   Copyright (c) 2013 Fabrice Leray 

export class Subscription {
    constructor(
        public id: number,
        public callback: (payload?: any) => void) {
    }
}
export interface IMessage {
    subscribe(callback: (payload?: any) => void): number;
    unSubscribe(id: number): void;
    notify(payload?: any): void;
}

export class Message implements IMessage {

    private _subscriptions: Subscription[];
    private _nextId: number;

    constructor(public message: string) {
        this._subscriptions = [];
        this._nextId = 0;
    }

    public subscribe(callback: (payload?: any) => number) {
        var subscription = new Subscription(this._nextId++, callback);
        this._subscriptions[subscription.id] = subscription;
        return subscription.id;
    }

    public unSubscribe(id: number) {
        this._subscriptions[id] = undefined;
    }

    public notify(payload?: any) {
        var index;
        for (index = 0; index < this._subscriptions.length; index++) {
            if (this._subscriptions[index]) {
                this._subscriptions[index].callback(payload);
            }
        }
    }
}
