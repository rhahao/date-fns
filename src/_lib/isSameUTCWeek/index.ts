import { UTCDate } from '@date-fns/utc'
import type { LocaleOptions, WeekStartOptions } from '../../types'
import isSameWeek from '../../isSameWeek/index'
import requiredArgs from '../requiredArgs/index'

export default function isSameUTCWeek(
  dirtyDateLeft: Date | number,
  dirtyDateRight: Date | number,
  options?: LocaleOptions & WeekStartOptions
): boolean {
  requiredArgs(2, arguments)
  return isSameWeek(
    new UTCDate(
      dirtyDateLeft instanceof Date ? dirtyDateLeft.getTime() : dirtyDateLeft
    ),
    new UTCDate(
      dirtyDateRight instanceof Date ? dirtyDateRight.getTime() : dirtyDateRight
    ),
    options
  )
}
