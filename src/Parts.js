import {Title, Link, Script, InlineScript} from './Elements';

export class Head {
  constructor(nl="\n") {
    this._title = new Title();
    this._links = [];
    this._scripts = [];
    this._inlineScript = '';
    this._nl = nl;
  }

  get title() {
    return this._title;
  }

  addCss(url) {
    let link = new Link(url, 'stylesheet', 'text/css');
    this._links.push(link);
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
    res += this._title.toString();
    res += nl;

    this._links.forEach( link => {
      res += link.toString();
      res += nl;
    });

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
