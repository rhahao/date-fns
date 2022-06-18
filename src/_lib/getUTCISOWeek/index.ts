import { UTCDate } from '@date-fns/utc'
import getISOWeek from '../../getISOWeek/index'
import requiredArgs from '../requiredArgs/index'

export default function getUTCISOWeek(date: Date | number) {
  requiredArgs(1, arguments)
  return getISOWeek(new UTCDate(date instanceof Date ? date.getTime() : date))
}
