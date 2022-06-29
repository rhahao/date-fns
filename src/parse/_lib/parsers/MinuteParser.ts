import type { Match } from '../../../locale/types'
import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { numericPatterns } from '../constants'
import { parseNumericPattern, parseNDigits } from '../utils'
import type { UTCDateMini } from '@date-fns/utc/date/mini'

export class MinuteParser extends Parser<number> {
  priority = 60

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'm':
        return parseNumericPattern(numericPatterns.minute, dateString)
      case 'mo':
        return match.ordinalNumber(dateString, { unit: 'minute' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate(_date: Date, value: number): boolean {
    return value >= 0 && value <= 59
  }

  set(date: UTCDateMini, _flags: ParseFlags, value: number): UTCDateMini {
    date.setMinutes(value, 0, 0)
    return date
  }

  incompatibleTokens = ['t', 'T']
}
