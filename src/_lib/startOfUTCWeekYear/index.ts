import { UTCDate } from '@date-fns/utc'
import startOfWeekYear from '../../startOfWeekYear/index'
import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'
import requiredArgs from '../requiredArgs/index'

export default function startOfUTCWeekYear(
  date: Date | number,
  options?: LocaleOptions & FirstWeekContainsDateOptions & WeekStartOptions
): Date {
  requiredArgs(1, arguments)

  return new Date(startOfWeekYear(new UTCDate(date), options).getTime())
}
