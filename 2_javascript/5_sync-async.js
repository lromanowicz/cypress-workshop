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
	fs.readFile(filePath, 'utf-8', function(err, data) {
		if (err) {
			return cb(err);
		}
		return cb(data);
	});
}

function getTextFromFilePromise(filePath) {
	return new Promise(function(resolve, reject) {
		fs.readFile(filePath, 'utf-8', function(err, data) {
			if (err) {
				reject(err);
			}
			resolve(data);
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
	console.log(`Asynchronous: ${data}`);
	string = data;
});
console.log(string);

//Getting text from file using promise based function
const fileData = getTextFromFilePromise('./text_file.txt'); //This won`t work as intended...
console.log(`This won\`t work as intended...: ${fileData}`);


//This will :)
getTextFromFilePromise('./text_file.txt').then(function(text) {
	console.log(`This works well...: ${text}`);
});
