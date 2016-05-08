'use strict';

class Storage {
	constructor(type) {
		this.storage;

		switch (type) {
			case Storage.TYPE.LOCAL:
				this.storage = Window.localStorage || {};
				break;
			case Storage.TYPE.SESSION:
				this.storage = Window.sessionStorage || {};
				break;
		}
	}

	getItem(key) {
		return this.storage[key];
	}

	getJSONItem(key) {
		return JSON.parse(this.getItem(key));
	}

	setItem(key, string) {
		this.storage[key] = string;
	}

	setJSONItem(key, object) {
		this.setItem(key, JSON.stringify(object));
	}

	deleteItem(key) {
		delete this.storage[key];
	}

	clear() {
		Object.keys(this.storage).forEach(this.deleteItem, this); 
	} 
};

Storage.TYPE = {
	LOCAL: 'local',
	SESSION: 'session'
};

let localStorage = new Storage(Storage.TYPE.LOCAL);
let sessionStorage = new Storage(Storage.TYPE.SESSION);

export default Storage;
export {localStorage, sessionStorage};
