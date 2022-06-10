// Now let's simulate a user action in a test,
// this button component should run the provieded
// 'action' function when clicked

import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ action, children }) {
	return <Button onClick={action}>{children}</Button>;
}

Button.propTypes = {
	action: PropTypes.func.isRequired,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
		.isRequired,
};
