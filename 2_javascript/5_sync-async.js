const fs = require('fs');

function sync() {
	console.log('This is synchronous code');
}

function async() {
	setTimeout(function() {
		console.log('This should be first?');
	}, 1000);
	console.log('This should be last?');
}

function getTextFromFile(filePath, cb) {
	if (typeof filePath !== 'string' || filePath.length <= 0) {
		return cb('File path must be a non empty string!');
	}

	fs.exists(filePath, function(isExisting) {
		if (isExisting) {
			fs.readFile(filePath, 'utf-8', function(err, data) {
				if (err) {
					return cb(err);
				}
				return cb(data);
			});
		} else {
			return cb('File doesn`t exist!');
		}
	});
}

function getTextFromFilePromise(filePath) {
	if (typeof filePath !== 'string' || filePath.length <= 0) {
		return 'File path must be a non empty string!';
	}

	return new Promise(function(resolve, reject) {
		fs.exists(filePath, function(isExisting) {
			if (isExisting) {
				fs.readFile(filePath, 'utf-8', function(err, data) {
					if (err) {
						reject(err);
					}
					resolve(data);
				});
			} else {
				reject('File doesn`t exist!');
			}
		});
	});
}

//This should be simple, but...
sync();

//What will happen? Which text will be logged first?
async();

//What will happen? What value will be the string variable?
let string;
getTextFromFile('./text_file.txt', function(data) {
	console.log(data);
});
console.log(string);

//Getting text from file using promise based function
const fileData = getTextFromFilePromise('./text_file.txt'); //This won`t work as intended...
console.log(fileData);


//This will :)
getTextFromFilePromise('./text_file.txt').then(function(text) {
	console.log(`Promise getText: ${text}`);
});
