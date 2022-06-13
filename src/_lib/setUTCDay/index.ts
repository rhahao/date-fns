import { UTCDate } from '@date-fns/utc'
import setDay from '../../setDay'
import type { LocaleOptions, WeekStartOptions } from '../../types'
import requiredArgs from '../requiredArgs'

export default function setUTCDay(
  dirtyDate: Date | number,
  dirtyDay: number,
  dirtyOptions?: LocaleOptions & WeekStartOptions
): Date {
  requiredArgs(2, arguments)

  return new Date(
    setDay(
      new UTCDate(dirtyDate instanceof Date ? dirtyDate.getTime() : dirtyDate),
      dirtyDay,
      dirtyOptions
    ).getTime()
  )
}
