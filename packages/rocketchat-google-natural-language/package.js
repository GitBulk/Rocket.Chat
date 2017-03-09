Package.describe({
	name: 'rocketchat:google-natural-language',
	version: '0.0.1',
	summary: 'Rocket.Chat Google Natural Language integration',
	git: ''
});

Npm.depends({
	'@google-cloud/language': '0.8.0'
});

Package.onUse(function(api) {
	api.use('ecmascript');
	api.use('rocketchat:lib');
	api.use('http');

	// api.mainModule('client/index.js', 'client');
	api.mainModule('server/index.js', 'server');
});