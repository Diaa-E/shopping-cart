import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectInput from "../SelectInput";

describe("SelectInput component", () => {

    function setup(jsx) {
        return {
            user: userEvent.setup(),
            ...render(jsx),
        }
    }

    it("Renders an ampty select input when passed empty array for options", () => {

        const { container } = setup(<SelectInput
            id={"selectInput"}
            name={"Select Input"}
            onChange={() => { }}
            options={[]}
            selected={""}
        />);
        const selectElement = container.querySelector("select#selectInput");

        expect(selectElement).toBeInTheDocument();
        expect(selectElement.value).toBe("");
    });

    it("Renders options from a name/value paired array of objects", () => {

        const { container } = setup(<SelectInput
            id={"selectInput"}
            name={"Select Input"}
            onChange={() => { }}
            options={[
                {
                    name: "option1",
                    value: "1"
                },
                {
                    name: "option2",
                    value: "2"
                }
            ]}
            selected={"1"}
        />);
        const selectElement = container.querySelector("select#selectInput");

        expect(selectElement.childNodes.length).toBe(2);
        expect(selectElement.value).toBe("1");
    });

    it("Calls onChange function when selected option changes", async () => {

        const onChange = vi.fn();
        const { user, container } = setup(<SelectInput
            id={"selectInput"}
            name={"Select Input"}
            onChange={onChange}
            options={[
                {
                    name: "option1",
                    value: "1"
                },
                {
                    name: "option2",
                    value: "2"
                }
            ]}
            selected={"1"}
        />);
        const selectElement = container.querySelector("select#selectInput");
        await user.selectOptions(selectElement, "1");
        
        expect(onChange).toHaveBeenCalledOnce();
    });
});