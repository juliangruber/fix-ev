var test = require('tape');
var fix = require('..');
var on = require('dom-events').on;
var createEvent = require('synthetic-dom-events');

test('curry', function (t) {
  t.plan(1);

  var el = document.createElement('div');

  on(el, 'click', function (ev) {
    (fix(function (_ev) {
      t.deepEqual(ev, _ev);
    }))(ev);
  });

  el.dispatchEvent(createEvent('click'));
});
