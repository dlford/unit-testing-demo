// Now let's try something a little more
// complicated, we will use a hook to fetch
// a list of users in this component, so we
// will need to mock that hook in the test

import React, { useState, useEffect, Suspense } from 'react';
import useApi from './useApi';

export default function UsersComponent() {
	const [users, setUsers] = useState([]);
	const { getUsers } = useApi();

	useEffect(() => {
		getUsers().then((data) => setUsers(data));
	}, [getUsers]);

	return (
		<Suspense fallback={<p>Loading...</p>}>
			<ul>
				{users.map(({ id, username }) => (
					<li key={id}>{username}</li>
				))}
			</ul>
		</Suspense>
	);
}
