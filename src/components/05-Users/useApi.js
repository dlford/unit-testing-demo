/**
 * @typedef {object} UseApi
 * @property {GetUsers} getUsers
 */

/**
 * @typedef {function} GetUsers
 * @returns {User[]} Array of users
 */

/**
 * @typedef {object} User
 * @property {string} id User ID
 * @property {string} username User display name
 */

/**
 * Hook that returns functions for using
 * the jsonplaceholder API
 *
 * @returns {UseApi}
 *
 * @example
 * const { getUsers } = useApi();
 */

export default function useApi() {
	async function getUsers() {
		return new Promise((resolve, reject) => {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then((res) => res.json())
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		});
	}

	return { getUsers };
}
