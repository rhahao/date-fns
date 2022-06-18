import requiredArgs from '../requiredArgs/index'
import startOfISOWeek from '../../startOfISOWeek/index'
import { UTCDate } from '@date-fns/utc'

export default function startOfUTCISOWeek(date: Date | number): Date {
  requiredArgs(1, arguments)

  return new Date(
    startOfISOWeek(
      new UTCDate(date instanceof Date ? date.getTime() : date)
    ).getTime()
  )
}
