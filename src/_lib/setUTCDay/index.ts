import { UTCDate } from '@date-fns/utc'
import setDay from '../../setDay'
import type { LocaleOptions, WeekStartOptions } from '../../types'
import requiredArgs from '../requiredArgs'

export default function setUTCDay(
  date: Date | number,
  day: number,
  options?: LocaleOptions & WeekStartOptions
): Date {
  requiredArgs(2, arguments)

  return new Date(
    setDay(
      new UTCDate(date instanceof Date ? date.getTime() : date),
      day,
      options
    ).getTime()
  )
}
