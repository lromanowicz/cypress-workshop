function logicOperators() {
	//Less than
	console.log(`Is 12 less than 15? ${12 < 15}`);

	//Less than or equal to
	console.log(`Is 12 less than or equal to 15? ${12 <= 15}`);

	//Equal to
	//Remember!! Double equals sign checks if values are equal. Single sign assigns the value to the variable.
	console.log(`Is 12 equal to 12? ${12 == 12}`);
	//We can also check the variable type using triple equal sign.
	console.log(`Is 12 equal to "12" and of the same type? ${12 === '12'}`);

	//Not equal to
	console.log(`Is 12 not equal to 13? ${12 != 13}`);
	//With type check
	console.log(`Is 12 not equal to 13 and not of the same type? ${12 !== '13'}`);

	//Greater than
	console.log(`Is 15 greater than 10? ${15 > 10}`);

	//Greater than or equal to
	console.log(`Is 15 greater than or equal to 10? ${15 >= 10}`);

	//And / Or
	console.log(`Is 15 less than 20 AND 16 greater than 10? ${15 < 20 && 16 > 10}`);
	console.log(`Is 15 less than 10 OR 20 greater than 10? ${15 < 10 || 20 > 10}`);
}

function validateAge(age) {
	if (age < 18) {
		console.log('You are too young to watch this content!');
	} else if (age >= 18 && age < 21) {
		console.log('Your access is limited!');
	} else {
		console.log('You have full access!!');
	}
}

function switchValidateAge(age) {
	switch (true) {
		case age < 18:
			console.log('You are too young to watch this content!');
			break;
		case age >= 18 && age < 21:
			console.log('Your access is limited!');
			break;
		default:
			console.log('You have full access!!');
			break;
	}
}

function shortIf(age) {
	age < 18
		? console.log('You are too young to watch this content!')
		: console.log('You have full access!!');
}

logicOperators();
validateAge(20);
switchValidateAge(20);
shortIf(19);
