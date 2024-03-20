import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegularButton from "../RegularButton";

describe("RegularButton component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx),
        }
    }

    it("Renders a button with passed props", () => {

        const { container } = setup(<RegularButton id={"test"} text={"click here"} style={"testClass"}/>);
        const buttonElement = container.querySelector("button#test");

        expect(buttonElement.textContent).toBe("click here");
        expect(buttonElement.classList[0]).toContain("testClass");
    });

    it("Adds extra classes from props", () => {

        const { container } = setup(<RegularButton id={"test"} text={"click here"} style={"testClass"} classes={["extra"]}/>);
        const buttonElement = container.querySelector("button#test");

        expect(buttonElement.classList).toContain("extra");
    });

    it("Calls onClick function when clicked", async () => {

        const onClick = vi.fn();
        const { user, container } = setup(<RegularButton id={"test"} text={"click here"} onClick={onClick}/>);
        const buttonElement = container.querySelector("button#test");
        await user.click(buttonElement);

        expect(onClick).toHaveBeenCalledOnce();
    });
});