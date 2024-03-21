import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FetchError from "../FetchError";

describe("FetchError component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx),
        }
    }

    it("Renders a static title", () => {

        const { container } = setup(<FetchError/>);
        const titleElement = container.querySelector("#errorTitle");

        expect(titleElement).toBeInTheDocument();
    });

    it("Shows error message from props", () => {

        const { container } = setup(<FetchError errorMessage={"404"}/>);
        const errorMessageElement = container.querySelector("#errorMessage");

        expect(errorMessageElement.textContent).toBe("404");
    });
})