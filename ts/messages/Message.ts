module App {
    /**
     * Module containing classes and stuff related to messaging. Messaging is
     * used to communicate between modules and code that has a reference to an
     * [[App.Messaging.AppMessenger]] instance.
     */
    export module Messaging {
        export class Message {
            /**
             * The Name of the message
             */
            private messageName: string;
            /**
             * Data Contained in this message, we expect the receiver to know
             * the format of this data based on the messageName. (I.E why would
             * you listen for messages you don't know how to make sense of..)
             */
            private data: { [id: string]: Object };
            /**
             * Constructs a new message
             * @param the name of the message, available names are defined in [[App.constants]]
             * @param the data in this message, we only assume a key -> value format
             */
            constructor(messageName: string, data?: { [id: string]: Object }) {
                this.messageName = messageName;
                if (!!data) { this.data = data; }
            }
            /**
             * Returns the name of this message
             */
            public getName(): string {
                return this.messageName;
            }
            /**
             * Returns the data of this message
             */
            public getData(): { [id: string]: Object } {
                return this.data;
            }
        }
    }
}