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

    it("Calls setValue function when plus button is clicked", async () => {

        const setValue = vi.fn();
        const { user, container } = setup(
            <NumberInput id={"test"} max={99} min={1} name={"test"} onChange={() => {}} value={"3"} setValue={setValue}/>
        );
        const plusButton = container.querySelector("button#plusButton");
        await user.click(plusButton);

        expect(setValue).toHaveBeenCalledOnce();
    });

    it("Calls setValue function when minus button is clicked", async () => {

        const setValue = vi.fn();
        const { user, container } = setup(
            <NumberInput id={"test"} max={99} min={1} name={"test"} onChange={() => {}} value={"3"} setValue={setValue}/>
        );
        const minusButton = container.querySelector("button#minusButton");
        await user.click(minusButton);

        expect(setValue).toHaveBeenCalledOnce();
    });

    it("Increases value by 1 when plus button is clicked", async () => {

        const setValue = vi.fn();
        const { user, container } = setup(
            <NumberInput id={"test"} max={99} min={1} name={"test"} onChange={() => {}} value={"3"} setValue={setValue}/>
        );
        const plusButton = container.querySelector("button#plusButton");
        await user.click(plusButton);

        expect(setValue).toHaveBeenCalledWith(4);
    });

    it("Decreses value by 1 when minus button is clicked", async () => {

        const setValue = vi.fn();
        const { user, container } = setup(
            <NumberInput id={"test"} max={99} min={1} name={"test"} onChange={() => {}} value={"3"} setValue={setValue}/>
        );
        const minusButton = container.querySelector("button#minusButton");
        await user.click(minusButton);

        expect(setValue).toHaveBeenCalledWith(2);
    });

    it("Does not increase value if max value is reached", async () => {

        const setValue = vi.fn();
        const { user, container } = setup(
            <NumberInput id={"test"} max={99} min={1} name={"test"} onChange={() => {}} value={"99"} setValue={setValue}/>
        );
        const plusButton = container.querySelector("button#plusButton");
        await user.click(plusButton);

        expect(setValue).toHaveBeenCalledWith(99);
    });

    it("Does not descrese value is min value is reached", async () => {

        const setValue = vi.fn();
        const { user, container } = setup(
            <NumberInput id={"test"} max={99} min={1} name={"test"} onChange={() => {}} value={"1"} setValue={setValue}/>
        );
        const minusButton = container.querySelector("button#minusButton");
        await user.click(minusButton);

        expect(setValue).toHaveBeenCalledWith(1);
    });
});