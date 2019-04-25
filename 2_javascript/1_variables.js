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
function varCheckString(isNewString) {
	var varString = 'This is an old string';
	if (isNewString) {
		console.log(`Old varString: ${varString}`); // This is an old string !!
		var varString = 'This is a new string';
		console.log(`New varString: ${varString}`)
	}
}


//Using let keyword.
function letCheckString(isNewString) {
	let letString = 'This is an old string';
	if (isNewString) {
		console.log(`Old letString: ${letString}`); // Undefined!!
		let letString = 'This is a new string';
		console.log(`New letString: ${letString}`);
	}
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


console.log(varCheckString(true));
console.log(letCheckString(true));
console.log(constCheck(false));

