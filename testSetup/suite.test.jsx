//Checks if suite is installed and working correctly

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Vitest is working correctly", () => {

    it("True is truthy", () => {

        expect(true).toBe(true);
    });

    it("False is falsey", () => {

        expect(false).toBe(false);
    });
});

describe("React testing library is working correctly", () => {

    it("Renders components", () => {

        render(<button>click here</button>);

        expect(screen.getByRole("button", {name: "click here"})).toBeInTheDocument();
    });
});