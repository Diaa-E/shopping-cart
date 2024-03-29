import { BrowserRouter } from "react-router-dom";
import { act, fireEvent, render} from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import MobileNav from "../MobileNav";

describe("MobileNav component", () => {

    beforeEach(() => vi.useFakeTimers({shouldAdvanceTime: true}));
    afterEach(() => vi.resetAllMocks());

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx, {wrapper: BrowserRouter})
        }
    }

    it("Opens nav menu when nav button is clicked", () => {

        const {container} = setup(<MobileNav setLockScroll={() => {}}/>);
        const navMenuButton = container.querySelector("button#navMenuButton");

        expect(container.querySelector("nav#navMenu")).toBeNull();

        fireEvent.click(navMenuButton);

        expect(container.querySelector("nav#navMenu")).toBeInTheDocument();
    });

    it("Locks scroll when nav menu is open", () => {

        const setLockScroll = vi.fn();
        const {container} = setup(<MobileNav setLockScroll={setLockScroll}/>);
        const navMenuButton = container.querySelector("button#navMenuButton");
        fireEvent.click(navMenuButton);

        expect(setLockScroll).toHaveBeenCalledWith(true);
    });

    it("Closes nav menu when backdrop is clicked", () => {

        const {container} = setup(<MobileNav setLockScroll={() => {}}/>);
        const navMenuButton = container.querySelector("button#navMenuButton");
        fireEvent.click(navMenuButton);
        const backdropElement = container.querySelector("#navBackdrop");
        const navMenuElement = container.querySelector("nav#navMenu");

        expect(backdropElement).toBeInTheDocument();

        fireEvent.click(backdropElement);
        act(() => vi.runAllTimers());

        expect(navMenuElement).not.toBeInTheDocument();
    });

    it("Closes nav menu when close nav menu button is clicked", () => {

        const {container} = setup(<MobileNav setLockScroll={(() => {})}/>);
        const navMenuButton = container.querySelector("button#navMenuButton");
        fireEvent.click(navMenuButton);
        const closeNavMenuButton = container.querySelector("button#closeNavMenu");
        const navMenuElement = container.querySelector("nav#navMenu");

        expect(closeNavMenuButton).toBeInTheDocument();

        fireEvent.click(closeNavMenuButton);
        act(() => vi.runAllTimers());

        expect(navMenuElement).not.toBeInTheDocument();
    });

    it("Unlocks scroll when nav menu is closed", () => {

        const setLockScroll = vi.fn();
        const {container} = setup(<MobileNav setLockScroll={setLockScroll}/>);
        const navMenuButton = container.querySelector("button#navMenuButton");
        fireEvent.click(navMenuButton);
        const closeNavMenuButton = container.querySelector("button#closeNavMenu");
        act(() => fireEvent.click(closeNavMenuButton));

        expect(setLockScroll).toHaveBeenCalledWith(false);
    });
});