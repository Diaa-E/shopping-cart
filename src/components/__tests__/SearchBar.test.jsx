import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../SearchBar";

describe("SearchBar component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx),
        }
    }

    it("Renders a seatch input with props values", () => {

        const { container } = setup(<SearchBar id={"searchBar"} name={"Search Bar"} onChange={() => {}} query={"query"}/>);
        const searchInput = container.querySelector("input#searchBar");

        expect(searchInput.value).toBe("query");
        expect(searchInput.type).toBe("search");
    });

    it("Calls onChange function when input value is changes", async () => {

        const onChange = vi.fn();
        const { user, container } = setup(<SearchBar id={"searchBar"} name={"Search Bar"} onChange={onChange} query={"query"}/>);
        const searchInput = container.querySelector("input#searchBar");
        await user.click(searchInput);
        await user.keyboard("e");

        expect(onChange).toHaveBeenCalledOnce();
    });
});