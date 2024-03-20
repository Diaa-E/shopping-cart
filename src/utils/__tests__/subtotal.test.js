import { describe, expect, it } from "vitest";
import { getSubtotal } from "../subtotal";

describe("getSubtotal utility function", () => {

    it("Returns correct total with whole number input", () => {

        expect(getSubtotal([{price: 15, amount: 1}, {price: 60, amount: 10}])).toBe(615);
    });

    it("Returns correct total with fraction  number input", () => {

        expect(getSubtotal([{price: 12.5, amount: 3}, {price: 45.65, amount: 14}])).toBe(676.6);
    });

    it("Ignores fractions higher than double precision", () => {
        
        expect(getSubtotal([{price: 12.567, amount: 1}, {price: 1.435, amount: 3}])).toBe(16.87)
    })
});