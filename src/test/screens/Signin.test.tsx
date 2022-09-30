import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../App";
import { Copyright } from "../../components/Copyright";

test("renders copyright", () => {
    render(<Copyright />);
    const linkElement = screen.getByText("Your Website");
    expect(linkElement).toHaveTextContent("Your Website");
});
