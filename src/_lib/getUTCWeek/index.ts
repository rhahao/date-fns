import { UTCDate } from '@date-fns/utc'
import getWeek from '../../getWeek/index'
import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'
import requiredArgs from '../requiredArgs/index'

export default function getUTCWeek(
  date: Date | number,
  options?: LocaleOptions & WeekStartOptions & FirstWeekContainsDateOptions
): number {
  requiredArgs(1, arguments)
  return getWeek(new UTCDate(date), options)
}
