"use strict";
require('es6-promise').polyfill();

var fs = require('fs');
var path = require('path');
var http = require('http');
var https = require('https');
var urlParse = require('url').parse;
var googleTTS = require('google-tts-api');

function downloadFile(url, dest) {
	return new Promise(function(resolve, reject) {
		var info = urlParse(url);
		var httpClient = info.protocol === 'https:' ? https : http;
		var options = {
			host: info.host,
			path: info.path,
			headers: {
				'user-agent': 'WHAT_EVER'
			}
		};

		httpClient.get(options, function(res) {
			if (res.statusCode !== 200) {
				reject(new Error('request to ' + url + ' failed, status code = ' + res.statusCode + ' (' + res.statusMessage + ')'));
				return;
			}
			var file = fs.createWriteStream(dest);
			file.on('finish', function() {
				file.close(resolve);
			});
			file.on('error', function(err) {
				fs.unlink(dest);
				reject(err);
			});
			res.pipe(file);
		})
		.on('error', function(err) {
			reject(err);
		})
		.end();
	});
}

function generateFile(FILENAME, TEXT){
	googleTTS(TEXT)
	.then(function(url) {
		var dest = path.resolve(__dirname, 'dist/'+FILENAME+'.mp3');
		console.log('Downloading to ' + dest + ' ...');
		return downloadFile(url, dest);
	})
	.then(function() {
		console.log('Download success');
	})
	.catch(function(err) {
		console.error(err.stack);
	});
}
var fs = require('fs');
var files = JSON.parse(fs.readFileSync('build/data/lines.json', 'utf8'));
console.log(files[i]);
for(var i=0;i<files.length;i++){
	generateFile(files[i]['filename'], files[i].text);
	console.log(files[i]['text']);
}