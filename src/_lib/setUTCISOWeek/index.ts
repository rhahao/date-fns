import { UTCDate } from '@date-fns/utc'
import setISOWeek from '../../setISOWeek/index'
import requiredArgs from '../requiredArgs/index'

export default function setUTCISOWeek(
  date: Date | number,
  isoWeek: number
): Date {
  requiredArgs(2, arguments)

  return new Date(setISOWeek(new UTCDate(date), isoWeek).getTime())
}
