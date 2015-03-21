///<reference path="file.ts" />

module App {
  export class Context {

      constructor(public greeting: string) {

      }
      public greet() :string {
          return "<h1>" + this.greeting + "</h1>";
      }
  }
}