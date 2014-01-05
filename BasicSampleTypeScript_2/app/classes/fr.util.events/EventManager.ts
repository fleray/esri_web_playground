//   Code under MIT License (see main license file).
//   Email : fabrice.leray.dev(at)gmail(dot)com
//   Copyright (c) 2013 Fabrice Leray 

import MessageManager = require('classes/fr.util.events/MessageManager');

export class EventManager {

    private static _evtManager: EventManager = null;

    private static _messages: any = {};

    constructor() {
        if (null !== EventManager._evtManager) {
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
        }
    }

    public static getInstance(): EventManager {
        if (null === EventManager._evtManager)
        {
            EventManager._evtManager = new EventManager();
        }
        return EventManager._evtManager;
    }



    subscribe(message: string, callback: (payload?: any) => void) {
        var msg: MessageManager.IMessage;
        msg = EventManager._messages[message] ||
        <MessageManager.IMessage>(EventManager._messages[message] = new MessageManager.Message(message));

        return msg.subscribe(callback);
    }

    unSubscribe(message: string, token: number) {
        if (EventManager._messages[message]) {
            (<MessageManager.IMessage>(EventManager._messages[message])).unSubscribe(token);
        }
    }

    publish(message: string, payload?: any) {
        if (EventManager._messages[message]) {
            (<MessageManager.IMessage>(EventManager._messages[message])).notify(payload);
        }
    }
}
