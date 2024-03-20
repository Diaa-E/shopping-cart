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
    });

    it("Add whole classes to price tag", () => {

        const { container } = setup(<PriceTag price={"23.56"} wholeClasses={["testClass"]}/>);
        const priceElement = container.querySelector("#price");

        expect(priceElement.classList).toContain("testClass");
    });

    it("Adds fraction classes to span element", () => {

        const { container } = setup(<PriceTag price={"23.56"} fractionClasses={["testClass"]}/>);
        const priceFractionElement = container.querySelector("span#priceFraction");

        expect(priceFractionElement.classList).toContain("testClass");
    });
});