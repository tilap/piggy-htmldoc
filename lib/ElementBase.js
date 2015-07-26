'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ElementBase = (function () {
  function ElementBase() {
    var tag = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var attributes = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    var content = arguments.length <= 2 || arguments[2] === undefined ? '' : arguments[2];
    var close = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

    _classCallCheck(this, ElementBase);

    this.tag = tag;
    this.attr = attributes;
    this.content = content;
    this.close = close;
  }

  _createClass(ElementBase, [{
    key: 'hasAttr',
    value: function hasAttr(name) {
      return Object.keys(this.attr).indexOf(name) > -1;
    }
  }, {
    key: 'setAttr',
    value: function setAttr(name, value) {
      if (!this.hasAttr(name)) {
        throw new Error('Unknown attribute "' + name + '" for ' + this.constructor.name);
      }
      this.attr[name] = value;
    }
  }, {
    key: 'hasContent',
    value: function hasContent() {
      return this.content !== '';
    }
  }, {
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;
    }
  }, {
    key: 'toString',
    value: function toString() {
      var _this = this;

      var attributes = [];
      Object.keys(this.attr).forEach(function (name) {
        if (_this.attr[name]) {
          attributes.push(name + '="' + _this.attr[name] + '"');
        }
      });

      return '<' + this.tag + (attributes.length > 0 ? ' ' + attributes.join(' ') : '') + '>' + this.content + (this.close ? '</' + this.tag + '>' : '');
    }
  }]);

  return ElementBase;
})();

exports['default'] = ElementBase;
module.exports = exports['default'];