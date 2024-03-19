import { describe, expect, it } from "vitest";
import { addItemToCart, createCartItem, findInCart, removeItemFromCart } from "../cartUtility";

describe("createCartItem utility function", () => {

    it("Returns an object with spread product details and an amount key", () => {

        expect(createCartItem({name: "item", price: 15}, 2)).toEqual({name: "item", price: 15, amount: 2});
    })
});

describe("addItemToCart utility function", () => {

    it("Adds an item to an empty cart", () => {

        expect(addItemToCart([], {id: "1"})).toEqual([{id: "1"}]);
    });

    it("Adds an item to the end of a cart if it doesn't already exist", () => {

        expect(addItemToCart([{id: "1"}, {id: "2"}],  {id: "3"})).toEqual([{id: "1"}, {id: "2"}, {id: "3"}]);
    });

    it("Updates an item if it already exists", () => {

        expect(addItemToCart([{id: "1", amount: 12}], {id: "1", amount: 3})).toEqual([{id: "1", amount: 3}]);
    }); 
});

describe("removeItemFromCart utility function", () => {

    it("Removes item from an array with only 1 element", () => {

        expect(removeItemFromCart([{id: "2"}], {id: "2"})).toEqual([]);
    })

    it("Removes item from an array with more than one element", () => {

        expect(removeItemFromCart([{id: "1"}, {id: "2"}, {id: "3"}], {id: "2"})).toEqual([{id: "1"}, {id: "3"}]);
    });

    it("Returns array unchanged if no id is matched", () => {

        expect(removeItemFromCart([{id: "1"}, {id: "2"}], {id: "3"})).toEqual([{id: "1"}, {id: "2"}]);
    });
});