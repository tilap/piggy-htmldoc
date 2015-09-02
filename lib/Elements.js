'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x9, _x10, _x11) { var _again = true; _function: while (_again) { var object = _x9, property = _x10, receiver = _x11; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x9 = parent; _x10 = property; _x11 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ElementBase5 = require('./ElementBase');

var _ElementBase6 = _interopRequireDefault(_ElementBase5);

var Title = (function (_ElementBase) {
  _inherits(Title, _ElementBase);

  function Title() {
    var separator = arguments.length <= 0 || arguments[0] === undefined ? ' | ' : arguments[0];

    _classCallCheck(this, Title);

    _get(Object.getPrototypeOf(Title.prototype), 'constructor', this).call(this, 'title');

    this.stack = [];
    this.separator = separator;
  }

  _createClass(Title, [{
    key: 'prepend',
    value: function prepend(str) {
      this.stack.unshift(str);
      return this;
    }
  }, {
    key: 'queue',
    value: function queue(str) {
      this.stack.push(str);
      return this;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.stack = [];
      return this;
    }
  }, {
    key: 'toString',
    value: function toString() {
      if (this.stack.length === 0) {
        return '';
      }
      this.content = this.stack.reverse().join(this.separator);
      return _get(Object.getPrototypeOf(Title.prototype), 'toString', this).call(this);
    }
  }]);

  return Title;
})(_ElementBase6['default']);

exports.Title = Title;

var Link = (function (_ElementBase2) {
  _inherits(Link, _ElementBase2);

  function Link() {
    var href = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var rel = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var type = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

    _classCallCheck(this, Link);

    _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).call(this, 'link', { rel: rel, href: href, type: type }, '', false);
  }

  return Link;
})(_ElementBase6['default']);

exports.Link = Link;

var Script = (function (_ElementBase3) {
  _inherits(Script, _ElementBase3);

  function Script() {
    var src = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var type = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
    var content = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];

    _classCallCheck(this, Script);

    _get(Object.getPrototypeOf(Script.prototype), 'constructor', this).call(this, 'script', { src: src, type: type }, content, true);
  }

  return Script;
})(_ElementBase6['default']);

exports.Script = Script;

var InlineScript = (function (_ElementBase4) {
  _inherits(InlineScript, _ElementBase4);

  function InlineScript() {
    var content = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    _classCallCheck(this, InlineScript);

    _get(Object.getPrototypeOf(InlineScript.prototype), 'constructor', this).call(this, 'script', {}, content, true);
  }

  return InlineScript;
})(_ElementBase6['default']);

exports.InlineScript = InlineScript;