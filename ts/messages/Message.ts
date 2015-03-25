module App {
    export module Messaging {
        export class Message {
            private message: string;

            constructor(message: string) {
                this.message = message;
            }
        }
    }
}