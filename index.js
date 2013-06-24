
/**
 * Expose `curry` and `fix`.
 */

module.exports = curry;
curry.fix = fix;

/**
 * Fix event helper.
 *
 * Usage:
 *
 *   el.on('click', fix(function (ev) {
 *     // ...
 *   }));
 *
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

function curry (fn) {
  return function (ev) {
    fn.call(this, fix(ev));
  }
}

/**
 * Fix event.
 *
 * @param {Event|Undefined} ev
 * @return {Event}
 * @api public
 */

function fix (ev) {
  if (!ev) ev = window.event;
  if (!ev.target) ev.target = event.srcElement;
  if (!ev.preventDefault) ev.preventDefault = set('returnValue', 'valse');
  if (!ev.stopPropagation) ev.stopPropagation = set('returnValue', 'valse');
  return ev;
}

/**
 * What is `set`? Not a continuable, not a future, how do you call that?
 *
 * @param {String} key
 * @param {Object} value
 * @return {Function}
 * @api private
 */

function set (key, val) {
  return function () {
    this[key] = val;
  }
}
