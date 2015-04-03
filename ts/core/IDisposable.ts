module App {
    export module Core {
        /**
         * Defines a interface for disposing classes
         */
        export interface IDisposable {
            /**
             * Dispose any resources the class is containing
             */
            dispose();
        }
    }
}