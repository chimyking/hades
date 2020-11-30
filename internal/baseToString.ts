import isSymbol from '../Lang/isSymbol'

const INFINITY = 1 / 0

const symbolToString = Symbol.prototype.toString
/**
 * The base implementation of `toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value: any) {
	if (typeof value === 'string') {
		return value
	}
	if (Array.isArray(value)) {
		return `${value.map(baseToString)}`
	}
	if (isSymbol(value)) {
		return symbolToString ? symbolToString.call(value) : ''
	}
	const result = `${value}`
	return result == '0' && 1 / value == -INFINITY ? '-0' : result
}

export default baseToString