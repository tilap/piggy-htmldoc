'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Elements = require('./Elements');

var _ElementBase = require('./ElementBase');

var _ElementBase2 = _interopRequireDefault(_ElementBase);

var Head = (function () {
  function Head() {
    var nl = arguments.length <= 0 || arguments[0] === undefined ? "\n\t" : arguments[0];

    _classCallCheck(this, Head);

    this._title = new _Elements.Title();
    this._data = {
      'description': '',
      'links': [],
      'scripts': [],
      'inlineScripts': '',
      'canonical': '',
      'locale': '',
      'charset': ''
    };
    this._elements = [];
    this._nl = nl;
  }

  _createClass(Head, [{
    key: 'siteTitle',
    value: function siteTitle(title) {
      this._data['siteTitle'] = title;
      return this;
    }
  }, {
    key: 'setDescription',
    value: function setDescription() {
      var description = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      this._data['description'] = description;
      return this;
    }
  }, {
    key: 'setCharset',
    value: function setCharset(charset) {
      this._data['charset'] = charset;
      return this;
    }
  }, {
    key: 'addCss',
    value: function addCss(url) {
      this._data['links'].push(new _Elements.Link(url, 'stylesheet', 'text/css'));
      return this;
    }
  }, {
    key: 'addDnsPrefetch',
    value: function addDnsPrefetch(url) {
      this._data['links'].push(new _Elements.Link(url, 'dns-prefetch'));
      return this;
    }
  }, {
    key: 'addJs',
    value: function addJs(url) {
      this._data['scripts'].push(new _Elements.Script(url, 'text/javascript'));
      return this;
    }
  }, {
    key: 'addInlineScript',
    value: function addInlineScript(script) {
      this._data['inlineScripts'] += "\n" + script;
      return this;
    }
  }, {
    key: 'setLocale',
    value: function setLocale() {
      var locale = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      this._data['locale'] = locale;
      return this;
    }
  }, {
    key: 'setCanonical',
    value: function setCanonical(url) {
      this._data['canonical'] = url;
      return this;
    }
  }, {
    key: 'addElement',
    value: function addElement(element) {
      this._elements.push(element);
      return this;
    }
  }, {
    key: '_prepare',
    value: function _prepare() {
      if (this._data['charset']) {
        var charset = this._data['charset'];
        this.addElement(new _ElementBase2['default']('meta', { charset: charset }, '', false));
        this.addElement(new _ElementBase2['default']('meta', { 'http-equiv': 'Content-Type', content: 'text/html;charset=' + charset }, '', false));
      }

      if (this._data['description']) {
        var description = this._data['description'];
        this.addElement(new _ElementBase2['default']('meta', { name: 'description', content: description }));
        this.addElement(new _ElementBase2['default']('meta', { itemprop: 'description', content: description }));
        this.addElement(new _ElementBase2['default']('meta', { property: 'og:description', content: description }));
        this.addElement(new _ElementBase2['default']('meta', { name: 'twitter:description', content: description }));
      }

      if (this._data['locale']) {
        var locale = this._data['locale'];
        this.addElement(new _ElementBase2['default']('meta', { property: 'og:locale', content: locale }));
        this.addElement(new _ElementBase2['default']('http-equiv', { property: 'Content-Language', content: locale }));
      }

      if (this._data['canonical']) {
        var canonical = this._data['canonical'];
        this.addElement(new _ElementBase2['default']('link', { rel: 'canonical', href: canonical }));
        this.addElement(new _ElementBase2['default']('meta', { property: 'og:url', content: canonical }));
        this.addElement(new _ElementBase2['default']('meta', { name: 'twitter:url', content: canonical }));
      }

      if (this._data['siteTitle']) {
        var title = this._data['siteTitle'];
        this.title.prepend(title);
        this.addElement(new _ElementBase2['default']('meta', { property: 'og:site_name', content: title }));
        this.addElement(new _ElementBase2['default']('meta', { name: 'twitter:title', content: title }));
      }
    }
  }, {
    key: 'toString',
    value: function toString() {
      this._prepare();

      var nl = this._nl;

      var rows = [];

      rows.push(this._title.toString());

      this._data['links'].forEach(function (link) {
        rows.push(link.toString());
      });

      this._data['scripts'].forEach(function (script) {
        rows.push(script.toString());
      });

      if (this._data['inlineScripts']) {
        var inlineScript = new _Elements.InlineScript(this._inlineScript);
        rows.push(inlineScript.toString());
      }

      if (this._elements) {
        this._elements.forEach(function (elmt) {
          rows.push(elmt.toString());
        });
      }

      return rows.join(nl);
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