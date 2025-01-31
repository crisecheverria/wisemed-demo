import * as React from "react";
import { render, screen } from "@testing-library/react-native";

import RootLayout from "../_layout";

describe(`<RootLayout />`, () => {
  test(`renders header text`, () => {
    render(<RootLayout />);

    expect(screen.getByText(/Traumatología/i)).toBeTruthy();
  });
});
