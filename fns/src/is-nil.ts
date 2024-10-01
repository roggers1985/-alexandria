import { isUndefined } from './is-undefined'
import { isNull } from './is-null'

type Nil = null | undefined

export function isNil(value: unknown): value is Nil {
    return isNull(value) || isUndefined(value)
}
