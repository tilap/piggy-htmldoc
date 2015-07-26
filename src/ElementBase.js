export default class ElementBase {
  constructor(tag='', attributes={}, content='', close=true) {
    this.tag = tag;
    this.attr = attributes;
    this.content = content;
    this.close = close;
  }

  hasAttr(name) {
    return Object.keys(this.attr).indexOf(name) > -1;
  }

  setAttr(name, value) {
    if(!this.hasAttr(name)) {
      throw new Error('Unknown attribute "' + name + '" for ' + this.constructor.name);
    }
    this.attr[name] = value;
  }

  hasContent() {
    return this.content!=='';
  }

  setContent(content) {
    this.content = content;
  }

  toString() {
    let attributes=[];
    Object.keys(this.attr).forEach(name => {
      if(this.attr[name]) {
        attributes.push(name + '="' + this.attr[name] + '"');
      }
    });

    return '<' + this.tag + (attributes.length > 0 ? ' ' + attributes.join(' ') : '') + '>'
      + this.content
      + (this.close ? '</' + this.tag + '>' : '');
  }
}
