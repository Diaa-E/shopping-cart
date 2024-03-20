import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import IconButton from "../IconButton";

describe("IconButton component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx)
        }
    }

    it("Renders a button with an icon inside it", () => {

        const { container } = setup(<IconButton icon={"path"} id={"iconButton"} onClick={() => {}} text={"icon button"}/>);
        const buttonElement = container.querySelector("button#iconButton");
        const iconElement = buttonElement.querySelector("img#iconButtonIcon");

        expect(buttonElement).toBeInTheDocument();
        expect(iconElement.src).toContain("path");
    });

    it("Calls onClick function when button is clicked", async () => {
        
        const onClick = vi.fn();
        const { user, container } = setup(<IconButton icon={"path"} id={"iconButton"} onClick={onClick} text={"icon button"}/>);
        const buttonElement = container.querySelector("button#iconButton");
        await user.click(buttonElement);

        expect(onClick).toHaveBeenCalledOnce();
    });

    it("Calls onClick function when icon is clicked", async () => {
        
        const onClick = vi.fn();
        const { user, container } = setup(<IconButton icon={"path"} id={"iconButton"} onClick={onClick} text={"icon button"}/>);
        const iconElement = container.querySelector("img#iconButtonIcon");
        await user.click(iconElement);

        expect(onClick).toHaveBeenCalledOnce();
    });
});