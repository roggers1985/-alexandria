import { assert } from './assert'

type RangeType = 'inclusive' | 'exclusive'

type RangeComparator = (a: number, b: number) => boolean

type RangeOptions = {
    type?: RangeType
    step?: number
}

const comparators: Record<RangeType, RangeComparator> = {
    exclusive: (a: number, b: number) => a < b,
    inclusive: (a: number, b: number) => a <= b,
}

/**
 * Generates a range of numbers from `start` to `end`, inclusive or exclusive based on the provided `options`.

 * @param start - The starting number of the range.
 * @param end - The ending number of the range.
 * @param options - Optional options object specifying the range type.
 * @returns An array of numbers within the specified range.

 * **Options:**
 * - `type`: Specifies whether the range should be inclusive or exclusive.
 *   - `inclusive`: The range includes both the `start` and `end` values.
 *   - `exclusive`: The range includes the `start` value but excludes the `end` value.

 * **Examples:**
 * - `range(0, 5)`: Generates the range `[0, 1, 2, 3, 4]`.
 * - `range(0, 5, { type: 'exclusive' })`: Generates the range `[0, 1, 2, 3]`.
 */
export function range(
    start: number,
    end: number,
    options: RangeOptions = { type: 'exclusive', step: 1 }
): number[] {
    const type = options.type ?? 'exclusive'
    const comparator = comparators[type]
    const step = options.step ?? 1

    assert(step != 0, 'step is zero')

    const direction = end >= start ? 'up' : 'down'
    const result: number[] = []

    if (direction === 'up') {
        for (let i = start; comparator(i, end); i += step) {
            result.push(i)
        }
    } else {
        for (let i = start; comparator(end, i); i -= step) {
            result.push(i)
        }
    }

    return result
}
