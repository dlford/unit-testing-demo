// How does this apply to frontend? Let's try
// out a simple React component using Jest and
// React Testing Library, a collection of tools
// for testing React components.

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders an `h1` with the text
 * "Hello" followed by a name.
 *
 * @component
 * @example
 * return (
 *   <HelloComponent name='Bob' />
 * );
 */

export default function HelloComponent({ name }) {
	return <h1>Hello {name}!</h1>;
}

HelloComponent.propTypes = {
	/** User's name */
	name: PropTypes.string,
};

HelloComponent.defaultProps = {
	name: 'Person',
};
