export interface DateTypeConstructor<DateType> {
  new (value: number | string | Date): Date

  new (): DateType

  new (value: Date | number | string): DateType

  new (
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): DateType
}

export default function dateConstructor<DateType extends Date>(
  date: DateType | number
): DateTypeConstructor<DateType> {
  if (date instanceof Date) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: I've no idea how to type this
    return date.constructor
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: I've no idea how to type this either
    return Date
  }
}
