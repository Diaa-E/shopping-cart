import { describe, expect, it } from "vitest";
import { formatPrice } from "../formatPrice";

describe("formatPrice utility function", () => {

    it("Splits a price with 2-digit fraction", () => {

        expect(formatPrice("44.50")).toEqual(["44", "50"]);
    });

    it("Corrects a price with 1-digit fraction", () => {

        expect(formatPrice("30.1")).toEqual(["30", "10"]);
    });

    it("Corrects a price with no fraction", () => {

        expect(formatPrice("45")).toEqual(["45", "00"]);
    });

    it("Handles a number input", () => {

        expect(formatPrice(34.44)).toEqual(["34", "44"]);
    });
});