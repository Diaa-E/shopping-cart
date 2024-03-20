import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CartButton from "../CartButton";

describe("CartButton component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx)
        }
    }

    it("Renders an open cart button with a cart icon inside it", () => {

        const { container } = setup(<CartButton cartLength={0} onClick={() => {}}/>);
        const cartButton = container.querySelector("button#cartButton");
        const cartIcon = container.querySelector("img#cartIcon");

        expect(cartButton).toBeInTheDocument();
        expect(cartIcon).toBeInTheDocument();
    });

    it("Shows cart length if cart is not empty", () => {

        const { container } = setup(<CartButton cartLength={5} onClick={() => {}}/>);
        const cartCount = container.querySelector("#cartCount");

        expect(cartCount).toBeInTheDocument();
        expect(cartCount.textContent).toBe("5");
    });

    it("Hides cart length if cart is empty", () => {

        const { container } = setup(<CartButton cartLength={0} onClick={() => {}}/>);
        const cartCount = container.querySelector("#cartCount");

        expect(cartCount).toBeNull();
    });

    it("Calls onClick function when button is clicked", async () => {

        const onClick = vi.fn();
        const { user, container } = setup(<CartButton cartLength={0} onClick={onClick}/>);
        const button = container.querySelector("button#cartButton");
        await user.click(button);

        expect(onClick).toHaveBeenCalledOnce();
    });

    it("Calls onClick function when button icon is clicked", async () => {

        const onClick = vi.fn();
        const { user, container } = setup(<CartButton cartLength={0} onClick={onClick}/>);
        const icon = container.querySelector("img#cartIcon");
        await user.click(icon);

        expect(onClick).toHaveBeenCalledOnce();
    });
});