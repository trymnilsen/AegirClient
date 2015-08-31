/// <reference path="../typings/backbone.d.ts" />
/// <reference path="../typings/backbone-eventable.d.ts" />

module App.Core {
    export class Observable<T> {

        private listeners: Array<(newValue: T) => void> = [];

        public listen(listener: (newValue: T)=> void)
        {
            this.listeners.push(listener);
        }
        public notify(value: T):void
        {
            for (let i = 0; i < this.listeners.length; ++i) {
                this.listeners[i](value);
            }
        }
        public removeListeners():void
        {
            this.listeners.length = 0;
        }
    }
}