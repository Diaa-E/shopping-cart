import { describe, expect, it } from "vitest";
import { sortByTitle } from "../productSorter";

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