import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import Dashboard from "../src/Components/Dashboard";

test("renders Dashboard component", () => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );

  // Test if the component renders without errors
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
});
