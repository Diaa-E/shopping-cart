import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import MobileNav from "../MobileNav";

describe("MobileNav component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx, {wrapper: BrowserRouter})
        }
    }

    it("Opens nav menu when nav button is clicked", async () => {

        const { user, container} = setup(<MobileNav setLockScroll={() => {}}/>);
        const navMenuButton = container.querySelector("button#navMenuButton");

        expect(container.querySelector("nav#navMenu")).toBeNull();

        await user.click(navMenuButton);

        expect(container.querySelector("nav#navMenu")).toBeInTheDocument();
    });

    it("Locks scroll when nav menu is open", async () => {

        const setLockScroll = vi.fn();
        const { user, container} = setup(<MobileNav setLockScroll={setLockScroll}/>);
        const navMenuButton = container.querySelector("button#navMenuButton");
        await user.click(navMenuButton);

        expect(setLockScroll).toHaveBeenCalledWith(true);
    });

    it("Closes nav menu when backdrop is clicked", async () => {

        const setLockScroll = vi.fn();
        const { user, container} = setup(<MobileNav setLockScroll={setLockScroll}/>);
        const navMenuButton = container.querySelector("button#navMenuButton");
        await user.click(navMenuButton);
        const backdropElement = container.querySelector("#navBackdrop");
        const navMenuElement = container.querySelector("nav#navMenu");

        expect(backdropElement).toBeInTheDocument();

        await user.click(backdropElement);

        expect(navMenuElement).not.toBeInTheDocument();
    });

    it("Closes nav menu when close nav menu button is clicked", async () => {

        const setLockScroll = vi.fn();
        const { user, container} = setup(<MobileNav setLockScroll={setLockScroll}/>);
        const navMenuButton = container.querySelector("button#navMenuButton");
        await user.click(navMenuButton);
        const closeNavMenuButton = container.querySelector("button#closeNavMenu");
        const navMenuElement = container.querySelector("nav#navMenu");

        expect(closeNavMenuButton).toBeInTheDocument();

        await user.click(closeNavMenuButton);

        expect(navMenuElement).not.toBeInTheDocument();
    });

    it("Unlocks scroll when nav menu is closed", async () => {

        const setLockScroll = vi.fn();
        const { user, container} = setup(<MobileNav setLockScroll={setLockScroll}/>);
        const navMenuButton = container.querySelector("button#navMenuButton");
        await user.click(navMenuButton);
        const closeNavMenuButton = container.querySelector("button#closeNavMenu");
        await user.click(closeNavMenuButton);

        expect(setLockScroll).toHaveBeenCalledWith(false);
    })
});