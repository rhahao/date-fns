import { UTCDateMini } from '@date-fns/utc/date/mini'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseAnyDigitsSigned } from '../utils'

export class TimestampSecondsParser extends Parser<number> {
  priority = 40

  parse(dateString: string): ParseResult<number> {
    return parseAnyDigitsSigned(dateString)
  }

  set(
    _date: UTCDateMini,
    _flags: ParseFlags,
    value: number
  ): [UTCDateMini, ParseFlags] {
    return [new UTCDateMini(value * 1000), { timestampIsSet: true }]
  }

  incompatibleTokens = '*' as const
}
