var test = require('tape');
var fix = require('..');
var on = require('dom-events').on;
var createEvent = require('synthetic-dom-events');
var bind = require('bind-component');

test('this', function (t) {
  t.plan(1);

  var el = document.createElement('div');

  function Obj () {
    this.foo = 'bar';
  }

  Obj.prototype.fn = fix(function (ev) {
    t.equal(this.foo, 'bar');
  });

  var obj = new Obj();

  on(el, 'click', bind(obj, 'fn'));

  el.dispatchEvent(createEvent('click'));
});
