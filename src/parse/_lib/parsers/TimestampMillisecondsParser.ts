import dateFrom from '../../../_lib/dateFrom/index'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseAnyDigitsSigned } from '../utils'

export class TimestampMillisecondsParser extends Parser<number> {
  priority = 20

  parse(dateString: string): ParseResult<number> {
    return parseAnyDigitsSigned(dateString)
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number
  ): [DateType, ParseFlags] {
    return [dateFrom(date, value), { timestampIsSet: true }]
  }

  incompatibleTokens = '*' as const
}
