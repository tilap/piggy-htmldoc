import ElementBase from './ElementBase';

export class Title extends ElementBase {
  constructor(separator = ' | ') {
    super('title');

    this.stack= [];
    this.separator= separator;
  }

  queue(str) {
    this.stack.push(str);
    return this;
  }

  reset() {
    this.stack=[];
    return this;
  }

  toString() {
    if(this.stack.length === 0) {
      return '';
    }
    this.content = this.stack.reverse().join(this.separator);
    return super.toString();
  }
}

export class Link extends ElementBase {
  constructor(href='', rel='', type='') {
    super('link', {rel: rel, href: href, type: type}, '', false);
  }
}

export class Script extends ElementBase {
  constructor(src='', type='', content='') {
    super('script', {src: src, type: type}, content, true);
  }
}

export class InlineScript extends ElementBase {
  constructor(content='') {
    super('script', {}, content, true);
  }
}


