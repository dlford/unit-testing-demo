/* eslint-disable no-restricted-syntax */

// This one is a cautionary tale, if you can spot
// the problem with this function, keep it to yourself!

export default function multiply(...args) {
	let result = 0;

	for (const arg of args) {
		result *= arg;
	}

	return result;
}
