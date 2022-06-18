import { UTCDate } from '@date-fns/utc'
import startOfWeek from '../../startOfWeek/index'
import type { LocaleOptions, WeekStartOptions } from '../../types'
import requiredArgs from '../requiredArgs/index'

export default function startOfUTCWeek(
  date: Date | number,
  options?: LocaleOptions & WeekStartOptions
): Date {
  requiredArgs(1, arguments)

  return new Date(startOfWeek(new UTCDate(date), options).getTime())
}
