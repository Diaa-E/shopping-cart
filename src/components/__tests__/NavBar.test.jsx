import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../NavBar";

describe("NavBar component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx, {wrapper: BrowserRouter})
        }
    }

    it("Renders a navigation bar when mobile mode is false", () => {

        const { container } = setup(<NavBar mobileMode={false} setLockScroll={() => {}}/>);
        const navElement = container.querySelector("nav#navBar");

        expect(navElement).toBeInTheDocument();
    });

    it("Renders a navigation menu when mobile mode is false", () => {

        const { container } = setup(<NavBar mobileMode={true} setLockScroll={() => {}}/>);
        const navElement = container.querySelector("button#navMenuButton");

        expect(navElement).toBeInTheDocument();
    });
})