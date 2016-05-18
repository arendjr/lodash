import arrayMap from './_arrayMap.js';
import baseAt from './_baseAt.js';
import baseFlatten from './_baseFlatten.js';
import basePullAt from './_basePullAt.js';
import compareAscending from './_compareAscending.js';
import isIndex from './_isIndex.js';
import rest from './rest.js';

/**
 * Removes elements from `array` corresponding to `indexes` and returns an
 * array of removed elements.
 *
 * **Note:** Unlike `_.at`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...(number|number[])} [indexes] The indexes of elements to remove.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [5, 10, 15, 20];
 * var evens = _.pullAt(array, 1, 3);
 *
 * console.log(array);
 * // => [5, 15]
 *
 * console.log(evens);
 * // => [10, 20]
 */
var pullAt = rest(function(array, indexes) {
  indexes = baseFlatten(indexes, 1);

  var length = array ? array.length : 0,
      result = baseAt(array, indexes);

  basePullAt(array, arrayMap(indexes, function(index) {
    return isIndex(index, length) ? +index : index;
  }).sort(compareAscending));

  return result;
});

export default pullAt;
