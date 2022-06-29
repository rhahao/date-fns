import type { UTCDateMini } from '@date-fns/utc/date/mini'
import type { Match } from '../../../locale/types'
import type { Era } from '../../../types'
import { Parser } from '../Parser'
import type { ParseFlags, ParseResult } from '../types'

export class EraParser extends Parser<number> {
  priority = 140

  parse(dateString: string, token: string, match: Match): ParseResult<Era> {
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return (
          match.era(dateString, { width: 'abbreviated' }) ||
          match.era(dateString, { width: 'narrow' })
        )
      // A, B
      case 'GGGGG':
        return match.era(dateString, { width: 'narrow' })
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return (
          match.era(dateString, { width: 'wide' }) ||
          match.era(dateString, { width: 'abbreviated' }) ||
          match.era(dateString, { width: 'narrow' })
        )
    }
  }

  set(date: UTCDateMini, flags: ParseFlags, value: number): UTCDateMini {
    flags.era = value
    date.setFullYear(value, 0, 1)
    date.setHours(0, 0, 0, 0)
    return date
  }

  incompatibleTokens = ['R', 'u', 't', 'T']
}
