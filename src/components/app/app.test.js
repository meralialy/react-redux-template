import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./app";

const dataTestId = "app";
const required = {};

const setup = (optional) => {
	render(<App {...required} {...optional} />);

	const element = screen.getByTestId(dataTestId);

	return element;
};

describe("<App />", () => {
	it("should render without crashing", () => {
		const element = setup();

		expect(element).toBeInTheDocument();
	});

	it("should render 'welcome'", () => {
		setup();

		const content = screen.getByText(/welcome/i);

		expect(content).toBeInTheDocument();
	});
});
