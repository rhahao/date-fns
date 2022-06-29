export default function dateFrom<DateType extends Date>(
  date: DateType | number,
  ref: number | Date
): DateType {
  if (date instanceof Date) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: I've no idea how to type this
    return new date.constructor(ref)
  } else {
    return new Date(ref) as DateType
  }
}
