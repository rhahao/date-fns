import getWeekYear from '../../getWeekYear/index'
import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'
import requiredArgs from '../requiredArgs/index'

export default function getUTCWeekYear(
  date: Date | number,
  options?: LocaleOptions & FirstWeekContainsDateOptions & WeekStartOptions
): number {
  requiredArgs(1, arguments)
  return getWeekYear(date, options)
}
