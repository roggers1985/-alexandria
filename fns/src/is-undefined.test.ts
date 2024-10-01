import { it, describe, expect } from 'vitest'
import { isUndefined } from './is-undefined'

describe('isUndefined', () => {
    it('returns true when the value is undefined', () => {
        expect(isUndefined(undefined)).toBe(true)
    })

    it('returns false when the value is null', () => {
        expect(isUndefined(null)).toBe(false)
    })

    it('returns false when the value is not undefined', () => {
        expect(isUndefined('')).toBe(false)
        expect(isUndefined('a')).toBe(false)
        expect(isUndefined(0)).toBe(false)
        expect(isUndefined(1)).toBe(false)
        expect(isUndefined(-0)).toBe(false)
        expect(isUndefined(-1)).toBe(false)
        expect(isUndefined({})).toBe(false)
        expect(isUndefined([])).toBe(false)
        expect(isUndefined(/r/)).toBe(false)
        expect(isUndefined(' ')).toBe(false)
        expect(isUndefined(new Set())).toBe(false)
        expect(isUndefined(new Map())).toBe(false)
        expect(isUndefined(NaN)).toBe(false)
    })
})
