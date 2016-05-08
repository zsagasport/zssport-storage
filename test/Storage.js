'use strict';

import {localStorage, sessionStorage} from '../src/Storage';

describe('localStorage', function() {
	afterEach(function() {
		localStorage.clear();
	});

	it('should add string with the given key ', function() {
		localStorage.setItem('testKey', 'testText');

		assert.strictEqual('testText', localStorage.getItem('testKey'));
		assert.notEqual('testString', localStorage.getItem('testKey'));
	});

	it('should add a JSON with the given key ', function() {
		localStorage.setJSONItem('testKey', {text:"tText"} );

		assert.equal(JSON.stringify({text:"tText"}), localStorage.getItem('testKey'));
		assert.equal(JSON.stringify({text:"tText"}), JSON.stringify(localStorage.getJSONItem('testKey')));
	});

	it('should give back null after deleting a string', function() {
		localStorage.setJSONItem('testKey', {text:"tText"} );

		assert.equal(JSON.stringify({text:"tText"}), localStorage.getItem('testKey'));

		localStorage.deleteItem('testKey');

		assert.isUndefined(localStorage.getItem('testKey'));
	});
});
