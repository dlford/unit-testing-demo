import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import Users from "./Users";

// Create some mock data
const mockUsers = [
  {
    id: 1,
    username: "user1",
  },
  {
    id: 2,
    username: "user2",
  },
];

// Mock the hook file
jest.mock("./useApi", () => ({
  __esModule: true,
  default: () => ({
    getUsers: () => Promise.resolve(mockUsers),
  }),
}));

describe("Users Component", () => {
  it("Renders a list of users", () => {
    const { getByText } = render(
      <Users /> 
    );
    expect(getByText(/user1/i)).toBeInTheDocument();
    expect(getByText(/user2/i)).toBeInTheDocument();
  });
});
