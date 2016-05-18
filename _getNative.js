import getValue from './_getValue.js';
import isMaskable from './_isMaskable.js';
import isNative from './isNative.js';

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return (isMaskable(value) ? baseIsNative : isNative)(value) ? value : undefined;
}

export default getNative;
