import { UTCDate } from '@date-fns/utc'
import getISOWeekYear from '../../getISOWeekYear'
import requiredArgs from '../requiredArgs/index'

export default function getUTCISOWeekYear(date: Date | number): number {
  requiredArgs(1, arguments)
  return getISOWeekYear(new UTCDate(date))
}
