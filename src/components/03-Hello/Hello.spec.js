import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Hello from './Hello';

describe('Hello Component', () => {
	it('Renders a default name', () => {
		// We need to render this component to test it,
		// here we are utilizing the `getByText` query
		// to find our component in the rendered document.
		const { getByText } = render(<Hello />);

		// We only really need to make sure it exists,
		// because we are querying for the text that should
		// appear within the element, so we know the logic
		// is working.
		expect(getByText(/hello Person/i)).toBeInTheDocument();

		// There isn't much value in testing for visual
		// elements (e.g. the button is blue), mainly we
		// want to test the logic of the code.
	});

	// We also need to test the properties passed into
	// the component
	it('Renders a given name', () => {
		const name = 'Dan';
		const { getByText } = render(<Hello name={name} />);
		const expr = new RegExp(`hello ${name}`, 'i');
		expect(getByText(expr)).toBeInTheDocument();
	});
});
