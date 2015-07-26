'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Elements = require('./Elements');

var Head = (function () {
  function Head() {
    var nl = arguments.length <= 0 || arguments[0] === undefined ? "\n" : arguments[0];

    _classCallCheck(this, Head);

    this._title = new _Elements.Title();
    this._links = [];
    this._scripts = [];
    this._inlineScript = '';
    this._nl = nl;
  }

  _createClass(Head, [{
    key: 'addCss',
    value: function addCss(url) {
      var link = new _Elements.Link(url, 'stylesheet', 'text/css');
      this._links.push(link);
    }
  }, {
    key: 'addJs',
    value: function addJs(url) {
      var script = new _Elements.Script(url, 'text/javascript');
      this._scripts.push(script);
    }
  }, {
    key: 'addInlineScript',
    value: function addInlineScript(script) {
      this._inlineScript += "\n" + script;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var nl = this._nl;

      var res = '';
      res += this._title.toString();
      res += nl;

      this._links.forEach(function (link) {
        res += link.toString();
        res += nl;
      });

      this._scripts.forEach(function (script) {
        res += script.toString();
        res += nl;
      });

      if (this._inlineScript) {
        var inlineScript = new _Elements.InlineScript(this._inlineScript);
        res += inlineScript.toString();
      }

      return res;
    }
  }, {
    key: 'title',
    get: function get() {
      return this._title;
    }
  }]);

  return Head;
})();

exports.Head = Head;

var Foot = (function () {
  function Foot() {
    var nl = arguments.length <= 0 || arguments[0] === undefined ? "\n" : arguments[0];

    _classCallCheck(this, Foot);

    this._scripts = [];
    this._inlineScript = '';
    this._nl = nl;
  }

  _createClass(Foot, [{
    key: 'addJs',
    value: function addJs(url) {
      var script = new _Elements.Script(url, 'text/javascript');
      this._scripts.push(script);
    }
  }, {
    key: 'addInlineScript',
    value: function addInlineScript(script) {
      this._inlineScript += "\n" + script;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var nl = this._nl;

      var res = '';

      this._scripts.forEach(function (script) {
        res += script.toString();
        res += nl;
      });

      if (this._inlineScript) {
        var inlineScript = new _Elements.InlineScript(this._inlineScript);
        res += inlineScript.toString();
      }

      return res;
    }
  }]);

  return Foot;
})();

exports.Foot = Foot;