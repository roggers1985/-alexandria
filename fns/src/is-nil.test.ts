import { describe, it, expect } from 'vitest'
import { isNil } from './is-nil'

describe('isNil', () => {
    it('returns true when the value is null ', () => {
        expect(isNil(null)).toBe(true)
    })

    it('returns true when the value is undefined', () => {
        expect(isNil(undefined)).toBe(true)
    })

    it('returns false when the value is not null or undefined', () => {
        expect(isNil('')).toBe(false)
        expect(isNil('a')).toBe(false)
        expect(isNil(0)).toBe(false)
        expect(isNil(1)).toBe(false)
        expect(isNil(-0)).toBe(false)
        expect(isNil(-1)).toBe(false)
        expect(isNil({})).toBe(false)
        expect(isNil([])).toBe(false)
        expect(isNil(/r/)).toBe(false)
        expect(isNil(' ')).toBe(false)
        expect(isNil(new Set())).toBe(false)
        expect(isNil(new Map())).toBe(false)
        expect(isNil(NaN)).toBe(false)
    })
})
