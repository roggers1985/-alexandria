import { describe, it, expect } from 'vitest'
import { isNull } from './is-null'

describe('isNull', () => {
    it('returns true when the value is null', () => {
        expect(isNull(null)).toBe(true)
    })

    it('returns false when the value is undefined', () => {
        expect(isNull(undefined)).toBe(false)
    })

    it('returns false when the value is not null', () => {
        expect(isNull('')).toBe(false)
        expect(isNull('a')).toBe(false)
        expect(isNull(0)).toBe(false)
        expect(isNull(1)).toBe(false)
        expect(isNull(-0)).toBe(false)
        expect(isNull(-1)).toBe(false)
        expect(isNull({})).toBe(false)
        expect(isNull([])).toBe(false)
        expect(isNull(/r/)).toBe(false)
        expect(isNull(' ')).toBe(false)
        expect(isNull(new Set())).toBe(false)
        expect(isNull(new Map())).toBe(false)
        expect(isNull(NaN)).toBe(false)
    })
})
