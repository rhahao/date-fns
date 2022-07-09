import { GenericDateConstructor } from '../../types'

export default function dateFrom<DateType extends Date>(
  date: DateType | number,
  ref: number | Date
): DateType {
  if (date instanceof Date) {
    return new (date.constructor as GenericDateConstructor<DateType>)(ref)
  } else {
    return new Date(ref) as DateType
  }
}
