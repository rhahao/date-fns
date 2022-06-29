import { UTCDateMini } from '@date-fns/utc/date/mini'
import type { ParseFlags, ParserOptions } from './types'

const TIMEZONE_UNIT_PRIORITY = 10

export abstract class Setter {
  public abstract priority: number
  public subPriority = 0

  public validate(_utcDate: Date, _options?: ParserOptions): boolean {
    return true
  }

  public abstract set(
    utcDate: UTCDateMini,
    flags: ParseFlags,
    options: ParserOptions
  ): UTCDateMini | [UTCDateMini, ParseFlags]
}

export class ValueSetter<TValue> extends Setter {
  constructor(
    private value: TValue,
    private validateValue: (
      utcDate: Date,
      value: TValue,
      options: ParserOptions
    ) => boolean,
    private setValue: (
      utcDate: UTCDateMini,
      flags: ParseFlags,
      value: TValue,
      options: ParserOptions
    ) => UTCDateMini | [UTCDateMini, ParseFlags],
    public priority: number,
    subPriority?: number
  ) {
    super()
    if (subPriority) {
      this.subPriority = subPriority
    }
  }

  validate(utcDate: Date, options: ParserOptions): boolean {
    return this.validateValue(utcDate, this.value, options)
  }

  set(
    utcDate: UTCDateMini,
    flags: ParseFlags,
    options: ParserOptions
  ): UTCDateMini | [UTCDateMini, ParseFlags] {
    return this.setValue(utcDate, flags, this.value, options)
  }
}

export class DateToSystemTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY
  subPriority = -1
  set(date: UTCDateMini, flags: ParseFlags): UTCDateMini {
    if (flags.timestampIsSet) {
      return date
    }

    const convertedDate = new Date(0)
    convertedDate.setFullYear(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    )
    convertedDate.setHours(
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
    return new UTCDateMini(convertedDate)
  }
}
