import {describe, expect, it} from "vitest";
import {identity} from "./identity";

describe("identity", () => {
    it("returns its argument", () => {
        expect(identity("a")).toBe("a")
        expect(identity("")).toBe("")
        expect(identity(0)).toBe(0)
        expect(identity(1)).toBe(1)
        expect(identity([])).toEqual([])
        expect(identity({})).toEqual({})
    })
})