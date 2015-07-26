piggy-htmldoc [![NPM version][npm-image]][npm-url]
============================

Basic htmldoc helpers to build HTML head, footer or anything else content.

## Usage

```
import { Head } from 'piggy-htmldoc/Parts';

let head = new Head();

// Some elements examples

head.title.queue('My app');
head.title.queue('Home');

head.addCss('http://toto.com/style.css');

head.addJs('http://toto.com/script.js');

head.addInlineScript('alert("ok");');



// Render it in any template
head.toString();

```

## Developer

Installing dev dependencies, you can edit the package source. Then run:
- ```npm run dev-compile``` for babel transpilation
- ```npm run dev-check``` for jshint check

[npm-image]: https://img.shields.io/npm/v/piggy-htmldoc.svg?style=flat
[npm-url]: https://npmjs.org/package/piggy-htmldoc
