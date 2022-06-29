import type { UTCDateMini } from '@date-fns/utc/date/mini'
import type { Match } from '../../../locale/types'
import { numericPatterns } from '../constants'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseNDigits, parseNumericPattern } from '../utils'

export class Hour1To24Parser extends Parser<number> {
  priority = 70

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'k':
        return parseNumericPattern(numericPatterns.hour24h, dateString)
      case 'ko':
        return match.ordinalNumber(dateString, { unit: 'hour' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate(_date: Date, value: number): boolean {
    return value >= 1 && value <= 24
  }

  set(date: UTCDateMini, _flags: ParseFlags, value: number): UTCDateMini {
    const hours = value <= 24 ? value % 24 : value
    date.setHours(hours, 0, 0, 0)
    return date
  }

  incompatibleTokens = ['a', 'b', 'h', 'H', 'K', 't', 'T']
}
