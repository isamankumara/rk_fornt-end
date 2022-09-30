import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders app with sign in page", () => {
    render(<App />);
    const linkElement = screen.getByText("Sign in");
    expect(linkElement).toHaveTextContent("Sign in");
});
