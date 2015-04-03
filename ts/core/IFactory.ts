module App {
    export module Core {
        /**
         * Defines a interface for creating simple factory methods in classes
         */
        export interface IFactory<T> {
            /**
             * Creates new instance of the class implementing this interface
             * @return {T} [description]
             */
            createNew():T;
        }
    }
}