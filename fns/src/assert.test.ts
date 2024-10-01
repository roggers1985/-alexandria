import {describe, expect, it} from "vitest";
import {assert, AssertionError} from "./assert";

describe("assert", () => {
    it('raises an error when the value is falsey', () => {
        expect(() => assert("")).toThrowError(AssertionError)
        expect(() => assert(0)).toThrowError(AssertionError)
        expect(() => assert(NaN)).toThrowError(AssertionError)
        expect(() => assert(false)).toThrowError(AssertionError)
        expect(() => assert(null)).toThrowError(AssertionError)
        expect(() => assert(undefined)).toThrowError(AssertionError)
    })

    it("does not raise an error when the value is truthy", () => {
        expect(() => assert(true)).not.toThrow()
        expect(() => assert("a")).not.toThrow()
        expect(() => assert(1)).not.toThrow()
        expect(() => assert({})).not.toThrow()
        expect(() => assert([])).not.toThrow()
    })
})