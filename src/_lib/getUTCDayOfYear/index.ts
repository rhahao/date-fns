import { UTCDate } from '@date-fns/utc'
import getDayOfYear from '../../getDayOfYear/index'
import requiredArgs from '../requiredArgs/index'

export default function getUTCDayOfYear(date: Date | number): number {
  requiredArgs(1, arguments)
  return getDayOfYear(new UTCDate(date instanceof Date ? date.getTime() : date))
}
