export class AssertionError extends Error {
}

/**
 * Asserts that a given value is truthy. Throws an `AssertionError` if the value is falsy.
 * @param arg The value to assert.
 * @param message An optional error message to include in the exception.
 * @throws `AssertionError` if `arg` is falsy.
 */
export function assert(arg: unknown, message: string = 'assert failed'): asserts arg {
    if (!arg) {
        throw new AssertionError(message);
    }
}