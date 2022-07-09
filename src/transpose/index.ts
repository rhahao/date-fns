import type { GenericDateConstructor } from '../types'
import dateFrom from '../_lib/dateFrom/index'

export default function transpose<
  DateInputType extends Date,
  DateOutputType extends Date
>(
  fromDate: DateInputType,
  constructor: DateOutputType | GenericDateConstructor<DateOutputType>
): DateOutputType {
  const date =
    constructor instanceof Date ? dateFrom(constructor, 0) : new constructor(0)
  date.setFullYear(
    fromDate.getFullYear(),
    fromDate.getMonth(),
    fromDate.getDate()
  )
  date.setHours(
    fromDate.getHours(),
    fromDate.getMinutes(),
    fromDate.getSeconds(),
    fromDate.getMilliseconds()
  )
  return date
}
