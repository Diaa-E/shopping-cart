import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import CartItem from "../CartItem";
import { BrowserRouter } from "react-router-dom";

describe("CartItem component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx, {wrapper: BrowserRouter}),
        }
    }

    function generateItem()
    {
        return {
            id: "1",
            title: "itemTitle",
            description: "description",
            image: "itemImage",
            price: "15.45",
            amount: 5,
            category: "itemCategory"
        }
    }

    it("Shows item's title in a link pointing to item's id", () => {

        const item = generateItem();
        const { container } = setup(<CartItem cart={[]} setCart={() => {}} closeCart={() => {}} item={item}/>);
        const titleElement = container.querySelector("a#itemTitle");

        expect(titleElement.textContent).toBe(item.title);
        expect(titleElement.href).toContain(item.id);
    });

    it("Closes cart when an item link is clicked", async () => {

        const item = generateItem();
        const closeCart = vi.fn();
        const { user, container } = setup(<CartItem cart={[]} setCart={() => {}} closeCart={closeCart} item={item}/>);
        const titleElement = container.querySelector("a#itemTitle");
        await user.click(titleElement);

        expect(closeCart).toHaveBeenCalledOnce();
    });

    it("Shows item's total cost", () => {

        const item = generateItem();
        const { container } = setup(<CartItem cart={[]} setCart={() => {}} closeCart={() => {}} item={item}/>);
        const totalCostElement = container.querySelector("#itemTotalCost");

        expect(totalCostElement.textContent.toLowerCase()).toContain("total");
        expect(totalCostElement.textContent.toLowerCase()).toContain("$7725");
    });

    it("Shows item's amount in a number input", () => {

        const item = generateItem();
        const { container } = setup(<CartItem cart={[]} setCart={() => {}} closeCart={() => {}} item={item}/>);
        const inputElement = container.querySelector("input#orderAmount" + item.id);

        expect(inputElement.value).toBe(item.amount.toString());
    })

    it("Calls setCart function when amount number input changes", async () => {

        const item = generateItem();
        const setCart = vi.fn();
        const { user, container } = setup(<CartItem cart={[]} setCart={setCart} closeCart={() => {}} item={item}/>);
        const inputElement = container.querySelector("input#orderAmount" + item.id);
        await user.click(inputElement);
        await user.keyboard("6");

        expect(setCart).toHaveBeenCalledOnce();
    });

    it("Renders a remove from cart button", () => {

        const item = generateItem();
        const { container } = setup(<CartItem cart={[]} setCart={() => {}} closeCart={() => {}} item={item}/>);
        const removeItemButton = container.querySelector("button#removeItemButton");

        expect(removeItemButton.textContent.toLowerCase()).toContain("remove");
    });

    it("Calls setCart function when remove from cart button is clicked", async () => {

        const item = generateItem();
        const setCart = vi.fn();
        const { user, container } = setup(<CartItem cart={[]} setCart={setCart} closeCart={() => {}} item={item}/>);
        const removeItemButton = container.querySelector("button#removeItemButton");
        await user.click(removeItemButton);

        expect(setCart).toHaveBeenCalledOnce();
    });
});