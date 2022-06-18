import { UTCDate } from '@date-fns/utc'
import setWeek from '../../setWeek'
import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'
import requiredArgs from '../requiredArgs/index'

export default function setUTCWeek(
  date: Date | number,
  week: number,
  options?: LocaleOptions & WeekStartOptions & FirstWeekContainsDateOptions
): Date {
  requiredArgs(2, arguments)

  return new Date(
    setWeek(
      new UTCDate(date instanceof Date ? date.getTime() : date),
      week,
      options
    ).getTime()
  )
}
