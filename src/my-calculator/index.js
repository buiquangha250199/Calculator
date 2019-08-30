const componentName = "myCalculator";
module.exports = componentName;

const myMessage = require('../my-message');
angular.module(componentName, [myMessage])
	.component(componentName, {
		bindings: {
			expression: '=',
		},
		controller: myCalculator,
		controllerAs: "self",
		template: require("./template.html"),
		style: require("./style.css")
	});
function myCalculator () {
	let self = this;
	console.log("Calculate component work!");
	self.checkValidExpression = true;

	self.check = function (re) {
		
		if(re.search(/[a-z]/gi) !== -1) {
			self.checkValidExpression = false;
			return 'Invalid expession!'
		} else if (re === '') {
			return '';
		}

		return 'Valid expression!'; 
	}

	this.calc = function (fn) {
		
		return new Function('return ' + fn)();
	}
};