
//What would happen if "this" keyword was removed?
var person = {
	name: "Robert",
	sayHello: function () {
		console.log("Hello " + this.name);
	}
}

person.sayHello();

//What will happen now?
var newPerson = {
	name: "Robert 2",
	sayHello: function () {
		setTimeout(function () {
			console.log("Hello " + this.name);
		}, 1000);
	}
}

newPerson.sayHello();
