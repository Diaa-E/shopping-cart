import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FooterLink from "../FooterLink";

describe("FooterLink component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx, {wrapper: BrowserRouter}),
        }
    }

    it("Returns a link element refering to the passed prop", () => {

        const { container } = setup(<FooterLink to={"location"} icon={""} text={"text"}/>);
        const linkElement = container.querySelector("a#textLink");

        expect(linkElement.href).toContain("location");
    });

    it("Does not return an icon if not passed an icon prop", () => {

        const { container } = setup(<FooterLink to={"location"} text={"text"}/>);
        const iconElement = container.querySelector("img#textLinkIcon");

        expect(iconElement).toBeNull();
    });

    it("Renders an image with passed source", () => {

        const { container } = setup(<FooterLink to={"location"} icon={"path"} text={"text"}/>);
        const iconElement = container.querySelector("img#textLinkIcon");

        expect(iconElement.src).toContain("path");
    });
});