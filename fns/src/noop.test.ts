import {describe, expect, it} from "vitest";
import {noop} from "./noop";

describe('noop', () => {
    it('returns nothing', () => {
        // noinspection JSVoidFunctionReturnValueUsed
        expect(noop()).toBeUndefined()
    })
});