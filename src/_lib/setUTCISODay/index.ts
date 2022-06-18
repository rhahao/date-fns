import { UTCDate } from '@date-fns/utc'
import setISODay from '../../setISODay/index'
import requiredArgs from '../requiredArgs/index'

export default function setUTCISODay(date: Date | number, day: number): Date {
  requiredArgs(2, arguments)

  return new Date(setISODay(new UTCDate(date), day).getTime())
}
