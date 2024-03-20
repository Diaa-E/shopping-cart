import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ShopItem from "../ShopItem";

describe("ShopItem component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx, {wrapper: BrowserRouter}),
        }
    }

    it("Renders a link to shop item id", () => {

        const { container } = setup(<ShopItem id={"1"} image={""} inCart={false} price={"25"} title={"item1"}/>);
        const linkElement = container.querySelector("a#shopItem1");

        expect(linkElement).toBeInTheDocument();
        expect(linkElement.href).toContain("1");
    });

    it ("Renders a thumbnail using prop path", () => {

        const { container } = setup(<ShopItem id={"1"} image={"path"} inCart={false} price={"25"} title={"item1"}/>);
        const thumbElement = container.querySelector("img#shopItemThumb");

        expect(thumbElement).toBeInTheDocument();
        expect(thumbElement.src).toContain("path");
    });

    it("Renders item's title using prop title", () => {

        const { container } = setup(<ShopItem id={"1"} image={"path"} inCart={false} price={"25"} title={"item1"}/>);
        const titleElement = container.querySelector("#shopItemTitle");

        expect(titleElement).toBeInTheDocument();
        expect(titleElement.textContent).toContain("item1");
    });

    it("Render item's price using prop price", () => {

        const { container } = setup(<ShopItem id={"1"} image={"path"} inCart={false} price={"25"} title={"item1"}/>);
        const priceElement = container.querySelector("#price");

        expect(priceElement).toBeInTheDocument();
        expect(priceElement.textContent).toBe("$2500");
    });
});