varUsage = function() {
	var string = 'This is a string example';
	var number = 123;
	var boolean = true || false;
};

letUsage = function() {
	let string = 'This is a string example';
	let number = 123;
	let boolean = true || false;
};

constUsage = function() {
	const string = 'This is a string example';
	const number = 123;
	const boolean = true || false;
};


//Let`s see what is the difference!
//Using var keyword
var varString = 'This is an old string';
function varCheckString(isNewString) {
	if (isNewString) {
		var varString = 'This is a new string';
		return varString;
	}
	return varString; //undefined !!
}


//Using let keyword.
let letString = 'This is an old string';
function letCheckString(isNewString) {
	if (isNewString) {
		let letString = 'This is a new string';
		return letString;
	}
	return letString; // "This is an old string"
}

//Using const keyword
function constCheck(shouldBeChanged) {
	const number = 1;
	if (shouldBeChanged) {
		number = 2;
		return number;
	}
	return number;
}


console.log(varCheckString(false));
console.log(letCheckString(false));
console.log(constCheck(false));

