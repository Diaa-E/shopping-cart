import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NumberInput } from "../NumberInput";

describe("NumberInput component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx)
        }
    }

    it("Renders a number input using passed props", () => {

        const { container } = setup(<NumberInput id={"test"} max={99} min={1} name={"test"} onChange={() => {}} value={"3"}/>);
        const inputElement = container.querySelector("input#test");

        expect(inputElement.value).toBe("3");
        expect(inputElement.min).toBe("1");
        expect(inputElement.max).toBe("99");
    });

    it("Calls onChange function when input text is changed", async () => {

        const onChange = vi.fn();
        const { user, container } = setup(<NumberInput id={"test"} max={99} min={1} name={"test"} onChange={onChange} value={"3"}/>);
        const inputElement = container.querySelector("input#test");
        await user.click(inputElement);
        await user.keyboard("6");

        expect(onChange).toHaveBeenCalledOnce();
    });
});