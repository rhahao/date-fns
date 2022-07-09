import dateFrom from '../../../_lib/dateFrom/index'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseAnyDigitsSigned } from '../utils'

export class TimestampSecondsParser extends Parser<number> {
  priority = 40

  parse(dateString: string): ParseResult<number> {
    return parseAnyDigitsSigned(dateString)
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number
  ): [DateType, ParseFlags] {
    return [dateFrom(date, value * 1000), { timestampIsSet: true }]
  }

  incompatibleTokens = '*' as const
}
