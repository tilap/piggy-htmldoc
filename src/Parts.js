import {Title, Link, Script, InlineScript} from './Elements';
import ElementBase from './ElementBase';

export class Head {

  constructor(nl="\n\t") {
    this._title = new Title();
    this._data = {
      'description': '',
      'links': [],
      'scripts': [],
      'inlineScripts': '',
      'canonical': '',
      'locale': '',
      'charset': '',
    };
    this._elements = [];
    this._nl = nl;
  }

  get title() {
    return this._title;
  }

  siteTitle(title) {
    this._data['siteTitle'] = title;
    return this;
  }

  setDescription(description='') {
    this._data['description'] = description;
    return this;
  }

  setCharset(charset) {
    this._data['charset'] = charset;
    return this;
  }

  addCss(url) {
    this._data['links'].push( new Link(url, 'stylesheet', 'text/css') );
    return this;
  }

  addDnsPrefetch(url) {
    this._data['links'].push( new Link(url, 'dns-prefetch'));
    return this;
  }

  addJs(url) {
    this._data['scripts'].push( new Script(url, 'text/javascript') );
    return this;
  }

  addInlineScript(script) {
    this._data['inlineScripts'] += "\n" + script;
    return this;
  }

  setLocale(locale='') {
    this._data['locale']= locale;
    return this;
  }

  setCanonical(url) {
    this._data['canonical']= url;
    return this;
  }

  addElement(element) {
    this._elements.push(element);
    return this;
  }

  _prepare() {
    if(this._data['charset']) {
      let charset = this._data['charset'];
      this.addElement( new ElementBase('meta', {charset: charset}, '', false) );
      this.addElement( new ElementBase('meta', {'http-equiv': 'Content-Type', content: 'text/html;charset=' + charset}, '', false) );
    }

    if(this._data['description']) {
      let description = this._data['description'];
      this.addElement( new ElementBase('meta', {name: 'description', content: description}) );
      this.addElement( new ElementBase('meta', {itemprop: 'description', content: description}) );
      this.addElement( new ElementBase('meta', {property: 'og:description', content: description}) );
      this.addElement( new ElementBase('meta', {name: 'twitter:description', content: description}) );
    }

    if(this._data['locale']) {
      let locale = this._data['locale'];
      this.addElement( new ElementBase('meta', {property: 'og:locale', content: locale}) );
      this.addElement( new ElementBase('http-equiv', {property: 'Content-Language', content: locale}) );
    }

    if(this._data['canonical']) {
      let canonical = this._data['canonical'];
      this.addElement( new ElementBase('link', {rel: 'canonical', href: canonical}) );
      this.addElement( new ElementBase('meta', {property: 'og:url', content: canonical}) );
      this.addElement( new ElementBase('meta', {name: 'twitter:url', content: canonical}) );
    }

    if(this._data['siteTitle']) {
      let title = this._data['siteTitle'];
      this.title.prepend(title);
      this.addElement( new ElementBase('meta', {property: 'og:site_name', content: title}) );
      this.addElement( new ElementBase('meta', {name: 'twitter:title', content: title}) );
    }

  }

  toString() {
    this._prepare();

    let nl = this._nl;

    let rows = [];

    rows.push(this._title.toString())

    this._data['links'].forEach( link => {
      rows.push(link.toString());
    });

    this._data['scripts'].forEach( script => {
      rows.push(script.toString());
    });

    if(this._data['inlineScripts']) {
      let inlineScript = new InlineScript(this._inlineScript);
      rows.push(inlineScript.toString());
    }

    if(this._elements) {
      this._elements.forEach( elmt => {
        rows.push(elmt.toString());
      })
    }

    return rows.join(nl);
  }
}

export class Foot {
  constructor(nl="\n") {
    this._scripts = [];
    this._inlineScript = '';
    this._nl = nl;
  }

  addJs(url) {
    let script = new Script(url, 'text/javascript');
    this._scripts.push(script);
  }

  addInlineScript(script) {
    this._inlineScript += "\n" + script;
  }

  toString() {
    let nl = this._nl;

    let res = '';

    this._scripts.forEach( script => {
      res += script.toString();
      res += nl;
    });

    if(this._inlineScript) {
      let inlineScript = new InlineScript(this._inlineScript);
      res += inlineScript.toString();
    }

    return res;
  }
}
