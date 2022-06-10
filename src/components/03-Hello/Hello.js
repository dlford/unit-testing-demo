// How does this apply to frontend? Let's try
// out a simple React component using Jest and
// React Testing Library, a collection of tools
// for testing React components.

import React from "react";
import PropTypes from "prop-types";

export default function HelloComponent({ name }) {
  return <h1>Hello {name}!</h1>;
}

HelloComponent.propTypes = {
  name: PropTypes.string
};

HelloComponent.defaultProps = {
  name: "Person"
};
