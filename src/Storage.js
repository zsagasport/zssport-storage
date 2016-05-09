'use strict';

class Storage {
	constructor(type) {
		this.storage;

		switch (type) {
			case Storage.TYPE.LOCAL:
				this.storage = window.localStorage || {};
				break;
			case Storage.TYPE.SESSION:
				this.storage = window.sessionStorage || {};
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

export default Storage;
