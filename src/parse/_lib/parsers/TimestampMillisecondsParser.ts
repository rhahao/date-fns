import { UTCDateMini } from '@date-fns/utc'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseAnyDigitsSigned } from '../utils'

export class TimestampMillisecondsParser extends Parser<number> {
  priority = 20

  parse(dateString: string): ParseResult<number> {
    return parseAnyDigitsSigned(dateString)
  }

  set(
    _date: UTCDateMini,
    _flags: ParseFlags,
    value: number
  ): [UTCDateMini, ParseFlags] {
    return [new UTCDateMini(value), { timestampIsSet: true }]
  }

  incompatibleTokens = '*' as const
}
