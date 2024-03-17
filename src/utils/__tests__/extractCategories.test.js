import { describe, expect, it } from "vitest";
import { extractCategories } from "../extractCategories";

describe("extractCategories utility function", () => {

    it("1 unique category", () => {

        expect(extractCategories([
            {
                category: "cat1"
            },
            {
                category: "cat1"
            },
            {
                category: "cat1"
            }])).toEqual([{name: "All categories", value: ""},{name: "cat1", value: "cat1"}]);
    });

    it("More than 1 unique category", () => {

        expect(extractCategories([
            {
                category: "cat1"
            },
            {
                category: "cat2"
            },
            {
                category: "cat2"
            },
            {
                category: "cat3"
            }])).toEqual([
                {
                    name: "All categories",
                    value: "",
                },
                {
                    name: "cat1",
                    value: "cat1"
                },
                {
                    name: "cat2",
                    value: "cat2"
                },
                {
                    name: "cat3",
                    value: "cat3"
                },
            ]);
    });
});