import { describe, expect, it } from "vitest";
import { createCartItem } from "../cartUtility";

describe("createCartItem utility function", () => {

    it("Returns an object with spread product details and an amount key", () => {

        expect(createCartItem({name: "item", price: 15}, 2)).toEqual({name: "item", price: 15, amount: 2});
    })
});