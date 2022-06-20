// Now let's simulate a user action in a test,
// this button component should run the provieded
// 'action' function when clicked

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a button with an `onClick` action
 *
 * @component
 * @example
 * function action (event) {
 *   event.preventDefault();
 * }
 *
 * return (
 *   <ButtonComponent action={action}>
 *     Click Me!
 *   </ButtonComponent>
 * );
 */

export default function ButtonComponent({ action, children }) {
	return (
		<button
			type='button'
			onClick={action}
		>
			{children}
		</button>
	);
}

ButtonComponent.propTypes = {
	/** Button click handler */
	action: PropTypes.func.isRequired,
	/** Button contents */
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
		.isRequired,
};
