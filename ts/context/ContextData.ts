module App {
	export module Context {
		export class ContextData  {
			/**
			 * Internal storage of our data
			 */
			private data : {[id:string] : Object};
			constructor() {
				// code...
			}
			public getData(): {[id:string]: Object} {
				return this.data;
			}
			public getData(dataKey: string): Object {
				if(this.data[dataKey] === undefined)
				{
					console.warn("Tried to get non datakey ",datakey);
				}
				else
				{
					return this.data[datakey];
				}
			}
			public setData(dataKey: string, data: Object): void {
				this.data[datakey] = data;
				//notifyChange
			}
		}
	}
}