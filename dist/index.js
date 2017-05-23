(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Deck = (function () {
    function Deck() {
    }
    return Deck;
})();
exports.Deck = Deck;

},{}],2:[function(require,module,exports){
var Disease = (function () {
    function Disease(color, cured) {
        if (cured === void 0) { cured = false; }
        this.color = color;
        this.cured = cured;
    }
    return Disease;
})();
exports.Disease = Disease;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["RED"] = 2] = "RED";
    Color[Color["YELLOW"] = 3] = "YELLOW";
})(exports.Color || (exports.Color = {}));
var Color = exports.Color;

},{}],3:[function(require,module,exports){
var model_1 = require('./model');
var model = new model_1.Model();
console.log(model);

},{"./model":4}],4:[function(require,module,exports){
var disease_1 = require('./disease');
var deck_1 = require('./deck');
var configuration = {
    infectionRates: [2, 2, 2, 3, 3, 4, 4],
    playerHandSizes: { 2: 4, 3: 3, 4: 2 }
};
var Model = (function () {
    function Model() {
        this.diseases = [];
        this.cities = [];
        this.playerDeck = new deck_1.Deck();
        this.playerDiscard = new deck_1.Deck();
        this.infectionDeck = new deck_1.Deck();
        this.infectionDiscard = new deck_1.Deck();
        this.outbreakLevel = 0;
        this.infectionLevel = 0;
        var colors = Object.keys(disease_1.Color)
            .filter(function (key) { return typeof disease_1.Color[key] === 'number'; })
            .map(function (key) { return disease_1.Color[key]; });
        for (var _i = 0; _i < colors.length; _i++) {
            var color = colors[_i];
            this.diseases.push(new disease_1.Disease(color));
        }
    }
    return Model;
})();
exports.Model = Model;

},{"./deck":1,"./disease":2}]},{},[3]);
