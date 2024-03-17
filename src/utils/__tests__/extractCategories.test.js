import { describe, expect, it } from "vitest";
import { extractCategories } from "../extractCategories";

describe("extractCategories utility function", () => {

    it("1 unique category", () => {

        expect(extractCategories([{category: "cat1"}, {category: "cat1"}, {category: "cat1"}])).toEqual(["All categories","cat1"]);
    });

    it("More than 1 unique category", () => {

        expect(extractCategories([{category: "cat1"}, {category: "cat2"}, {category: "cat2"}, {category: "cat3"}])).toEqual(["All categories", "cat1", "cat2", "cat3"]);
    });
});