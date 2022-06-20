/**
 * Multiplies all numbers passed in
 * @param {...number} args One or more numbers
 * @returns {number} Result of all passed
 *   in numbers multiplied together
 * @example
 * const total = multiply(1,2,3); // returns 6
 */

export default function multiply(...args) {
	return args.reduce((current, next) => {
		return current * next;
	});
}
