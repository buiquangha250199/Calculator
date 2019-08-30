const componentName = "myMessage";
module.exports = componentName;
angular.module(componentName, []).component(componentName, {
	bindings: {
		message: '='
	},
	controller: myMessage, 
	template: require("./template.html"),
	style: require("./style.css")
});

function myMessage() {
	console.log("Message component work!");
}