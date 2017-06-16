// JavaScript source code
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter(" Twitter!!!");
alert(greeter.greet);
alert("Du er superkul");
//# sourceMappingURL=util.js.map