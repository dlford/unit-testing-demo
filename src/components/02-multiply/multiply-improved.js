export default function multiply(...args) {
	return args.reduce((current, next) => {
		return current * next;
	});
}
