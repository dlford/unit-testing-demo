/* eslint-disable no-restricted-syntax */

export default function add(...args) {
	let result = 0;

	for (const arg of args) {
		if (typeof arg === 'number' && !Number.isNaN(arg)) {
			result += arg;
		}
	}

	return result;
}
