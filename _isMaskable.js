import coreJsData from './_coreJsData.js';
import isFunction from './isFunction.js';

/**
 * Checks if `func` is capable of being masked.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
 */
function isMaskable(value) {
  return !!coreJsData && isFunction(value);
}

export default isMaskable;
