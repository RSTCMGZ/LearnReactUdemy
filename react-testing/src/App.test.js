import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders learn react h1 tag", () => {
    render(<App />);
    const linkElement = screen.getByText(/Learn React/i);
    expect(linkElement).toBeInTheDocument();
});