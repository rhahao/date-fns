import { UTCDateMini } from '@date-fns/utc/date/mini'
import { timezonePatterns } from '../constants'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'
import { parseTimezonePattern } from '../utils'

// Timezone (ISO-8601. +00:00 is `'Z'`)
export class ISOTimezoneWithZParser extends Parser<number> {
  priority = 10

  parse(dateString: string, token: string): ParseResult<number> {
    switch (token) {
      case 'X':
        return parseTimezonePattern(
          timezonePatterns.basicOptionalMinutes,
          dateString
        )
      case 'XX':
        return parseTimezonePattern(timezonePatterns.basic, dateString)
      case 'XXXX':
        return parseTimezonePattern(
          timezonePatterns.basicOptionalSeconds,
          dateString
        )
      case 'XXXXX':
        return parseTimezonePattern(
          timezonePatterns.extendedOptionalSeconds,
          dateString
        )
      case 'XXX':
      default:
        return parseTimezonePattern(timezonePatterns.extended, dateString)
    }
  }

  set(date: UTCDateMini, flags: ParseFlags, value: number): UTCDateMini {
    if (flags.timestampIsSet) {
      return date
    }
    return new UTCDateMini(date.getTime() - value)
  }

  incompatibleTokens = ['t', 'T', 'x']
}
