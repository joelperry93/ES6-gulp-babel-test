(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Cat = (function () {
    function Cat(name) {
        _classCallCheck(this, Cat);

        this.name = name;
    }

    _createClass(Cat, [{
        key: 'sayHello',
        value: function sayHello() {
            console.log('I\'m ' + this.name);
        }
    }]);

    return Cat;
})();

var x = require('./test');

console.log(x);

var cats = [new Cat('Tim'), new Cat('Dave'), new Cat('Peter'), new Cat('Milkshake')];

cats.forEach(function (cat) {
    cat.sayHello();
});

},{"./test":2}],2:[function(require,module,exports){
"use strict";

module.exports = "Test";

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9lbHBlcnJ5L2Rldi9wbGF5Z3JvdW5kL2Jyb3dzZXJpZnktdGVzdC9lczYuanMiLCIvVXNlcnMvam9lbHBlcnJ5L2Rldi9wbGF5Z3JvdW5kL2Jyb3dzZXJpZnktdGVzdC90ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQU0sR0FBRztBQUNNLGFBRFQsR0FBRyxDQUNPLElBQUksRUFBRTs4QkFEaEIsR0FBRzs7QUFFRCxZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNwQjs7aUJBSEMsR0FBRzs7ZUFLRyxvQkFBRztBQUNQLG1CQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7OztXQVBDLEdBQUc7OztBQVVULElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFZixJQUFJLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7O0FBRXJGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHLEVBQUk7QUFDaEIsT0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0NBQ2xCLENBQUMsQ0FBQzs7Ozs7QUNsQkgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQ2F0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgc2F5SGVsbG8oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJXFwnbSAnICsgdGhpcy5uYW1lKTtcbiAgICB9XG59XG4gXG52YXIgeCA9IHJlcXVpcmUoJy4vdGVzdCcpOyBcbiBcbmNvbnNvbGUubG9nKHgpO1xuXG52YXIgY2F0cyA9IFtuZXcgQ2F0KFwiVGltXCIpLCBuZXcgQ2F0KFwiRGF2ZVwiKSwgbmV3IENhdChcIlBldGVyXCIpLCBuZXcgQ2F0KFwiTWlsa3NoYWtlXCIpXTtcblxuY2F0cy5mb3JFYWNoKGNhdCA9PiB7XG4gICAgY2F0LnNheUhlbGxvKCk7XG59KTsgIiwibW9kdWxlLmV4cG9ydHMgPSBcIlRlc3RcIjsiXX0=
