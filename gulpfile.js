'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'zssport-storage.css',
	bundleFileName: 'zssport-storage.js',
	moduleName: 'zssport-storage',
	testNodeSrc: [
		'env/test/node.js',
		'test/**/*.js'
	]
});
