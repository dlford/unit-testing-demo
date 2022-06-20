/* eslint-disable no-restricted-syntax */

// This one is a cautionary tale, if you can spot
// the problem with this function, keep it to yourself!

/**
 * Multiplies all numbers passed in
 * @param {...number} args One or more numbers
 * @returns {number} Result of all passed
 *   in numbers multiplied together
 * @example
 * const total = multiply(1,2,3); // returns 6
 */

export default function multiply(...args) {
	let result = 0;

	for (const arg of args) {
		result *= arg;
	}

	return result;
}
