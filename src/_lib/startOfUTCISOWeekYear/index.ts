import { UTCDate } from '@date-fns/utc'
import startOfISOWeekYear from '../../startOfISOWeekYear/index'
import requiredArgs from '../requiredArgs/index'

export default function startOfUTCISOWeekYear(date: Date | number): Date {
  requiredArgs(1, arguments)

  return new Date(
    startOfISOWeekYear(
      new UTCDate(date instanceof Date ? date.getTime() : date)
    ).getTime()
  )
}
