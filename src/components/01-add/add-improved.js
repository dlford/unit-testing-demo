/* eslint-disable no-restricted-syntax */

/**
 * Adds all numbers passed in
 * @param {...number} args One or more numbers
 * @returns {number} Total of all passed numbers
 * @example
 * const total = add(1,2,3); // returns 6
 */

export default function add(...args) {
	let result = 0;

	for (const arg of args) {
		if (typeof arg === 'number' && !Number.isNaN(arg)) {
			result += arg;
		}
	}

	return result;
}
