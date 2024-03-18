import { describe, expect, it } from "vitest";
import { sortByPrice, sortByTitle } from "../productSorter";

describe("sortByPrice utility function", () => {

    it("Sorts lower to higher", () => {

        expect(sortByPrice([
            {
                price: 12.4
            },
            {
                price: 3.4
            },
            {
                price: 2.25
            }
        ], false)).toEqual([
            {
                price: 2.25
            },
            {
                price: 3.4
            },
            {
                price: 12.4
            },
        ]);
    }); 

    it("Sorts higher to lower when passed true", () => {

        expect(sortByPrice([
            {
                price: 12.4
            },
            {
                price: 3.4
            },
            {
                price: 2.25
            }
        ], true)).toEqual([
            {
                price: 12.4
            },
            {
                price: 3.4
            },
            {
                price: 2.25
            },
        ]);
    }); 

    it("Handles string input", () => {

        expect(sortByPrice([
            {
                price: "12.4"
            },
            {
                price: "3.4"
            },
            {
                price: "2.25"
            }
        ], false)).toEqual([
            {
                price: "2.25"
            },
            {
                price: "3.4"
            },
            {
                price: "12.4"
            },
        ]);
    }); 
});

describe("sortByTitle urility function", () => {

    it("Sorts A-Z single word titles", () => {

        expect(sortByTitle([
            {
                title: "cde"
            },
            {
                title: "bcd"
            },
            {
                title: "abc"
            },
        ], false)).toEqual([
            {
                title: "abc"
            },
            {
                title: "bcd"
            },
            {
                title: "cde"
            },
        ]);
    });

    it("Sortes A-Z multiple word titles", () => {

        expect(sortByTitle([
            {
                title: "red apple"
            },
            {
                title: "green plant"
            },
            {
                title: "yellow lemon"
            },
            {
                title: "black widow"
            }
        ], false)).toEqual([
            {
                title: "black widow"
            },
            {
                title: "green plant"
            },
            {
                title: "red apple"
            },
            {
                title: "yellow lemon"
            },
        ]);
    });

    it("Sorts A-Z similar beginning multiple word titles", () => {

        expect(sortByTitle([
            {
                title: "red apple"
            },
            {
                title: "red app"
            },
            {
                title: "red appl"
            }
        ], false)).toEqual([
            {
                title: "red app"
            },
            {
                title: "red appl"
            },
            {
                title: "red apple"
            },
        ]);
    });

    it("Sorts Z-A when passed true", () => {

        expect(sortByTitle([
            {
                title: "cde"
            },
            {
                title: "bcd"
            },
            {
                title: "abc"
            },
        ], true)).toEqual([
            {
                title: "cde"
            },
            {
                title: "bcd"
            },
            {
                title: "abc"
            },
        ]);
    });
}); 