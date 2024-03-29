import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom"; //Link element requires router context
import { ModalContext } from "../../routes/App";

describe("Cart component", () => {

    beforeEach(() => vi.useFakeTimers({shouldAdvanceTime: true}));
    afterEach(() => vi.resetAllMocks());

    function setup(jsx, contextProps)
    {
        return {
            user: userEvent.setup(),
            ...render(<ModalContext.Provider value={[...contextProps]}>{jsx}</ModalContext.Provider>, {wrapper: BrowserRouter}),
        }
    }

    function generateCart(length)
    {
        const cart = [];

        for (let i = 0; i < length; i++)
        {
            cart.push({
                id: i.toString(),
                title: "item" + i,
                category: "category" + i,
                price: (Math.random() * 100).toFixed(2),
                description: "description" + i,
                image: "image" + i,
                amount: Math.floor(Math.random() * 100),
            });
        }

        return cart;
    }

    it("Closes cart when the overlay parent div is clicked", async () => {

        const openModal = vi.fn();
        const closeCart = vi.fn();
        const { user, container } = setup(<Cart cart={[]} setCart={() => {}} closeCart={closeCart}/>, [openModal]);
        const overlayDiv = container.querySelector("#cartBackdrop");
        await user.click(overlayDiv);
        vi.runAllTimers();

        expect(closeCart).toHaveBeenCalledOnce();
    });

    it("Does not close cart when user clicks on the cart element", async () => {

        const openModal = vi.fn();
        const closeCart = vi.fn();
        const { user, container } = setup(<Cart cart={[]} setCart={() => {}} closeCart={closeCart}/>, [openModal]);
        const cartDiv = container.querySelector("#cart");
        await user.click(cartDiv);

        expect(closeCart).not.toHaveBeenCalled();
    });

    it("Shows how many unique items are in the cart next to the title header", () => {

        const openModal = vi.fn();
        const { container } = setup(<Cart cart={generateCart(3)} closeCart={() => {}} setCart={() => {}}/>, [openModal]);
        const headerTitle = container.querySelector("#cartTitle");

        expect(headerTitle.textContent).toContain("(3)");
    });

    it("Closes cart when close cart button is clicked", async () => {

        const openModal = vi.fn();
        const closeCart = vi.fn();
        const { user, container } = setup(<Cart cart={[]} setCart={() => {}} closeCart={closeCart}/>, [openModal]);
        const closeCartButton = container.querySelector("button#closeCart");
        await user.click(closeCartButton);
        vi.runAllTimers();

        expect(closeCart).toHaveBeenCalledOnce();
    });

    it("Renders each cart item once", () => {

        const openModal = vi.fn();
        const { container } = setup(<Cart cart={generateCart(5)} closeCart={() => {}} setCart={() => {}}/>, [openModal]);
        const cartItems = container.querySelector("#cartItems");

        expect(cartItems.childNodes.length).toBe(5);
    });

    it("Renders an element indicating the cart is empty when passed an empty array", () => {

        const openModal = vi.fn();
        const { container } = setup(<Cart cart={[]} closeCart={() => {}} setCart={() => {}}/>, [openModal]);
        const emptyCartText = container.querySelector("#emptyCart");

        expect(emptyCartText.textContent.toLowerCase()).toContain("empty");
    });

    it("Shows subtotal for current items in the cart", () => {

        const openModal = vi.fn();
        const cart = generateCart(2);
        cart[0].price = 12;
        cart[0].amount = 13;
        cart[1].price = 45.5;
        cart[1].amount = 3;
        // total = 292.5
        const { container } = setup(<Cart cart={cart} closeCart={() => {}} setCart={() => {}} />, [openModal]);
        const subtotalElement = container.querySelector("#subtotal")

        expect(subtotalElement.textContent.toLowerCase()).toContain("subtotal");
        expect(subtotalElement.textContent).toContain("$29250");
    });

    it("Renders a checkout button", () => {

        const openModal = vi.fn();
        const { container } = setup(<Cart cart={generateCart(4)} closeCart={() => {}} setCart={() => {}}/>, [openModal]);
        const checkoutButton = container.querySelector("button#checkoutButton");

        expect(checkoutButton).toBeInTheDocument();
        expect(checkoutButton.textContent.toLowerCase()).toBe("checkout");
    })

    it("Renders a clear cart button", () => {

        const openModal = vi.fn();
        const { container } = setup(<Cart cart={generateCart(3)} closeCart={() => {}} setCart={() => {}}/>, [openModal]);
        const clearCartButton = container.querySelector("button#clearCartButton");

        expect(clearCartButton).toBeInTheDocument();
        expect(clearCartButton.textContent.toLowerCase()).toContain("clear");
    });

    it("Opens modal when clear cart button is clicked", {timeout: 600}, async () => {

        const openModal = vi.fn();
        const setCart = vi.fn().mockImplementation((cart) => cart);
        const { user, container } = setup(<Cart cart={generateCart(3)} closeCart={() => {}} setCart={setCart}/>, [openModal]);
        const clearCartButton = container.querySelector("button#clearCartButton");
        await user.click(clearCartButton);

        expect(openModal).toHaveBeenCalledOnce();
    });
});