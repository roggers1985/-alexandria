import {describe, expect, it} from "vitest";
import {range} from "./range";

describe("range", () => {
    it("returns an exclusive range by default" ,() => {
        expect(range(0, 3)).toEqual([0, 1, 2])
    })

    it("returns an exclusive range when specifying the option type:exclusive", () => {
        expect(range(0, 3, { type: "exclusive"})).toEqual([0, 1, 2])
    })

    it("returns an inclusive range when specifying the option type:inclusive", () => {
        expect(range(0, 3, { type: "inclusive"})).toEqual([0, 1, 2, 3])
    })

    it("returns an range with a step size of 2 when specifying the option step:2", () => {
        expect(range(0, 3, { step: 2} )).toEqual([0, 2])
        expect(range(0, 5, { step: 2} )).toEqual([0, 2, 4])
        expect(range(0, 4, { step: 2, type: "inclusive"} )).toEqual([0, 2, 4])
        expect(range(0, 4, { step: 2, type: "exclusive"} )).toEqual([0, 2])
    })

    it("returns a negative range when the range is negative", () => {
        expect(range(-3, 0)).toEqual([-3, -2, -1])
        expect(range(-3, 0, { type: "inclusive"})).toEqual([-3, -2, -1, 0])
        expect(range(-3, 0, { type: "exclusive"})).toEqual([-3, -2, -1])
    })

    it("returns a partial negative range when the start is negative but the end is positive", () => {
        expect(range(-3, 3)).toEqual([-3, -2, -1, 0, 1, 2])
        expect(range(-3, 3, { step: 2 })).toEqual([-3, -1,  1])
        expect(range(-3, 3, { step: 2, type: "inclusive" })).toEqual([-3, -1,  1, 3])
        expect(range(-3, 3, { type: "inclusive"})).toEqual([-3, -2, -1, 0, 1, 2, 3])
        expect(range(-3, 3, { type: "exclusive"})).toEqual([-3, -2, -1, 0, 1, 2])
    })

    it("returns descending range when the start is higher than the end", () => {
        expect(range(3, 0)).toEqual([3, 2, 1])
        expect(range(3, 0, { type: "inclusive"})).toEqual([3, 2, 1, 0])
        expect(range(3, 0, { type: "exclusive"})).toEqual([3, 2, 1])
        expect(range(6, 0, { step: 2} )).toEqual([6, 4, 2])
        expect(range(6, 0, { step: 2, type: "inclusive"} )).toEqual([6, 4, 2, 0])
    })
})