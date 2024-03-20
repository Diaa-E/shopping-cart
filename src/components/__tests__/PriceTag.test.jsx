import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PriceTag from "../PriceTag";

describe("PriceTage component", () => {

    function setup(jsx)
    {
        return {
            user: userEvent.setup(),
            ...render(jsx),
        }
    }

    it("It returns passed price formatted as -> $ wholePrice fraction", () => {

        const { container } = setup(<PriceTag price={"23.56"}/>);
        const priceElement = container.querySelector("#price");

        expect(priceElement.textContent).toBe("$2356");
    });

    it("Wraps price fraction in a span", () => {

        const { container } = setup(<PriceTag price={"23.56"}/>);
        const priceFractionElement = container.querySelector("span#priceFraction");

        expect(priceFractionElement.textContent).toBe("56");
    })
});