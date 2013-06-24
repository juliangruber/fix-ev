
# fix-ev

Make `Event#target`, `Event#stopPropagation()` and `Event#preventDefault()`
work in old IEs.

## Usage

Use `fix-ev` in functional style to fix `ev` objects:

```js
var fix = require('fix-ev');
var on = require('dom-events').on;

on(document.body, 'click', fix(function (ev) {
  // all works in IE8
  console.log(ev.target);
  ev.stopPropagation();
  ev.preventDefault();
}));
```

Or use it more clasically:

```js
var fix = require('fix-ev').fix;
var on = require('dom-events').on;

on(document.body, 'click', function (ev) {
  ev = fix(ev);
  // ...
});
```

## API

### fix(fn)

Returns a new function that calls `fn` with a fixed `ev` object as soon as
called.

### fix.fix(ev)

Fix the given event.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install fix-ev
```

Then bundle for the browser with
[browserify](https://github.com/substack/node-browserify).

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
