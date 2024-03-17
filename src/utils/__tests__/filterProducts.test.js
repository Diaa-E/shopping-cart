import { describe, expect, it } from "vitest";
import { filterProducts } from "../filterProducts";

describe("filterProducts utility function", () => {

    it("1 matching item", () => {

        expect(filterProducts(
            [
                {
                    category: "cat1"
                },
                {
                    category: "cat2"
                }
            ],
            "cat1"
        )).toEqual([{category: "cat1"}]);
    });

    it("More than 1 matching item", () => {

        expect(filterProducts(
            [
                {
                    category: "cat1"
                },
                {
                    category: "cat2"
                },
                {
                    category: "cat1"
                },
                {
                    category: "cat2"
                },
                {
                    category: "cat1"
                },
            ],
            "cat1",
        )).toEqual([{category: "cat1"}, {category: "cat1"}, {category: "cat1"}]);
    });
});