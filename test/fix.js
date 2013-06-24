var test = require('tape');
var fix = require('..');
var on = require('dom-events').on;
var createEvent = require('synthetic-dom-events');

test('target', function (t) {
  t.plan(1);

  var el = document.createElement('div');

  on(el, 'click', fix(function (ev) {
    t.deepEqual(ev.target, el);
  }));

  el.dispatchEvent(createEvent('click'));
});

test('stopPropagation', function (t) {
  t.plan(1);

  var el = document.createElement('div');
  var child = document.createElement('div');
  el.appendChild(child);

  on(child, 'click', fix(function (ev) {
    ev.stopPropagation();
    t.ok(true);
  }));

  on(el, 'click', function () {
    t.fail();
  });

  child.dispatchEvent(createEvent('click'));
});

test('preventDefault', function (t) {
  t.plan(1);

  var el = document.createElement('div');
  var child = document.createElement('div');
  el.appendChild(child);

  on(child, 'click', fix(function (ev) {
    ev.preventDefault();
    t.ok(true);
  }));

  on(el, 'click', function () {
    t.fail();
  });

  child.dispatchEvent(createEvent('click'));
});
