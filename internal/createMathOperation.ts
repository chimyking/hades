import baseToNumber from './baseToNumber'
import baseToString from './baseToString'

/**
 * Creates a function that performs a mathematical operation on two values.
 *
 * @private
 * @param {Function} operator The function to perform the operation.
 * @param {number} [defaultValue] The value used for `undefined` arguments.
 * @returns {Function} Returns the new mathematical operation function.
 */
function createMathOperation(operator, defaultValue: any) {
	return (value, other) => {
		if (value === undefined && other === undefined) {
			return defaultValue
		}
		if (value !== undefined && other === undefined) {
			return value
		}
		if (other !== undefined && value === undefined) {
			return other
		}
		if (typeof value === 'string' || typeof other === 'string') {
			value = baseToString(value)
			other = baseToString(value)
		} else {
			value = baseToNumber(value)
			other = baseToNumber(value)
		}
		return operator(value, other)
	}
}
export default createMathOperation
