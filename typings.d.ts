type DateOrStringOrNumber = Date | string | number;
type Formatters = {[key: string]: (date: Date) => string};

declare module '@ukyo/date-fns' {

  function addDays(date: DateOrStringOrNumber, amount: number): Date;
  namespace addDays {}

  function addHours(date: DateOrStringOrNumber, amount: number): Date;
  namespace addHours {}

  function addISOYears(date: DateOrStringOrNumber, amount: number): Date;
  namespace addISOYears {}

  function addMilliseconds(date: DateOrStringOrNumber, amount: number): Date;
  namespace addMilliseconds {}

  function addMinutes(date: DateOrStringOrNumber, amount: number): Date;
  namespace addMinutes {}

  function addMonths(date: DateOrStringOrNumber, amount: number): Date;
  namespace addMonths {}

  function addQuarters(date: DateOrStringOrNumber, amount: number): Date;
  namespace addQuarters {}

  function addSeconds(date: DateOrStringOrNumber, amount: number): Date;
  namespace addSeconds {}

  function addWeeks(date: DateOrStringOrNumber, amount: number): Date;
  namespace addWeeks {}

  function addYears(date: DateOrStringOrNumber, amount: number): Date;
  namespace addYears {}

  function closestIndexTo(dateToCompare: DateOrStringOrNumber, datesArray: DateOrStringOrNumber[]): number;
  namespace closestIndexTo {}

  function closestTo(dateToCompare: DateOrStringOrNumber, datesArray: DateOrStringOrNumber[]): Date;
  namespace closestTo {}

  function compareAsc(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace compareAsc {}

  function compareDesc(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace compareDesc {}

  function differenceInCalendarDays(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarISOYears {}

  function differenceInCalendarMonths(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber, options?: {weekStartsOn: number}): number;
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInCalendarYears {}

  function differenceInDays(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInDays {}

  function differenceInHours(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInHours {}

  function differenceInISOYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInISOYears {}

  function differenceInMilliseconds(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInMilliseconds {}

  function differenceInMinutes(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInMinutes {}

  function differenceInMonths(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInMonths {}

  function differenceInQuarters(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInQuarters {}

  function differenceInSeconds(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInSeconds {}

  function differenceInWeeks(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInWeeks {}

  function differenceInYears(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): number;
  namespace differenceInYears {}

  function distanceInWords(dateFrom: DateOrStringOrNumber, dateTo: DateOrStringOrNumber, options?: {includeSeconds: boolean}): string;
  namespace distanceInWords {}

  function distanceInWordsToNow(date: DateOrStringOrNumber, options?: {includeSeconds: boolean}): string;
  namespace distanceInWordsToNow {}

  function eachDay(startDate: DateOrStringOrNumber, endDate: DateOrStringOrNumber): Date[];
  namespace eachDay {}

  function endOfDay(date: DateOrStringOrNumber): Date;
  namespace endOfDay {}

  function endOfHour(date: DateOrStringOrNumber): Date;
  namespace endOfHour {}

  function endOfISOWeek(date: DateOrStringOrNumber): Date;
  namespace endOfISOWeek {}

  function endOfISOYear(date: DateOrStringOrNumber): Date;
  namespace endOfISOYear {}

  function endOfMinute(date: DateOrStringOrNumber): Date;
  namespace endOfMinute {}

  function endOfMonth(date: DateOrStringOrNumber): Date;
  namespace endOfMonth {}

  function endOfQuarter(date: DateOrStringOrNumber): Date;
  namespace endOfQuarter {}

  function endOfSecond(date: DateOrStringOrNumber): Date;
  namespace endOfSecond {}

  function endOfToday(): Date;
  namespace endOfToday {}

  function endOfTomorrow(): Date;
  namespace endOfTomorrow {}

  function endOfWeek(date: DateOrStringOrNumber, options?: {weekStartsOn: number}): Date;
  namespace endOfWeek {}

  function endOfYear(date: DateOrStringOrNumber): Date;
  namespace endOfYear {}

  function endOfYesterday(): Date;
  namespace endOfYesterday {}

  function format(date: DateOrStringOrNumber, format?: string, options?: {locale: Object}): string;
  namespace format {}

  function getDate(date: DateOrStringOrNumber): number;
  namespace getDate {}

  function getDay(date: DateOrStringOrNumber): number;
  namespace getDay {}

  function getDayOfYear(date: DateOrStringOrNumber): number;
  namespace getDayOfYear {}

  function getDaysInMonth(date: DateOrStringOrNumber): number;
  namespace getDaysInMonth {}

  function getDaysInYear(date: DateOrStringOrNumber): number;
  namespace getDaysInYear {}

  function getHours(date: DateOrStringOrNumber): number;
  namespace getHours {}

  function getISOWeek(date: DateOrStringOrNumber): number;
  namespace getISOWeek {}

  function getISOWeeksInYear(date: DateOrStringOrNumber): number;
  namespace getISOWeeksInYear {}

  function getISOYear(date: DateOrStringOrNumber): number;
  namespace getISOYear {}

  function getMilliseconds(date: DateOrStringOrNumber): number;
  namespace getMilliseconds {}

  function getMinutes(date: DateOrStringOrNumber): number;
  namespace getMinutes {}

  function getMonth(date: DateOrStringOrNumber): number;
  namespace getMonth {}

  function getQuarter(date: DateOrStringOrNumber): number;
  namespace getQuarter {}

  function getSeconds(date: DateOrStringOrNumber): number;
  namespace getSeconds {}

  function getYear(date: DateOrStringOrNumber): number;
  namespace getYear {}

  function isAfter(dateToCompare: DateOrStringOrNumber, date: DateOrStringOrNumber): boolean;
  namespace isAfter {}

  function isBefore(dateToCompare: DateOrStringOrNumber, date: DateOrStringOrNumber): boolean;
  namespace isBefore {}

  function isDate(argument: any): boolean;
  namespace isDate {}

  function isEqual(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isEqual {}

  function isFirstDayOfMonth(date: DateOrStringOrNumber): boolean;
  namespace isFirstDayOfMonth {}

  function isFriday(date: DateOrStringOrNumber): boolean;
  namespace isFriday {}

  function isFuture(date: DateOrStringOrNumber): boolean;
  namespace isFuture {}

  function isLastDayOfMonth(date: DateOrStringOrNumber): boolean;
  namespace isLastDayOfMonth {}

  function isLeapYear(date: DateOrStringOrNumber): boolean;
  namespace isLeapYear {}

  function isMonday(date: DateOrStringOrNumber): boolean;
  namespace isMonday {}

  function isPast(date: DateOrStringOrNumber): boolean;
  namespace isPast {}

  function isSameDay(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameDay {}

  function isSameHour(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameHour {}

  function isSameISOWeek(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameISOWeek {}

  function isSameISOYear(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameISOYear {}

  function isSameMinute(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameMinute {}

  function isSameMonth(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameMonth {}

  function isSameQuarter(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameQuarter {}

  function isSameSecond(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameSecond {}

  function isSameWeek(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber, options?: {weekStartsOn: number}): boolean;
  namespace isSameWeek {}

  function isSameYear(dateLeft: DateOrStringOrNumber, dateRight: DateOrStringOrNumber): boolean;
  namespace isSameYear {}

  function isSaturday(date: DateOrStringOrNumber): boolean;
  namespace isSaturday {}

  function isSunday(date: DateOrStringOrNumber): boolean;
  namespace isSunday {}

  function isThisHour(date: DateOrStringOrNumber): boolean;
  namespace isThisHour {}

  function isThisISOWeek(date: DateOrStringOrNumber): boolean;
  namespace isThisISOWeek {}

  function isThisISOYear(date: DateOrStringOrNumber): boolean;
  namespace isThisISOYear {}

  function isThisMinute(date: DateOrStringOrNumber): boolean;
  namespace isThisMinute {}

  function isThisMonth(date: DateOrStringOrNumber): boolean;
  namespace isThisMonth {}

  function isThisQuarter(date: DateOrStringOrNumber): boolean;
  namespace isThisQuarter {}

  function isThisSecond(date: DateOrStringOrNumber): boolean;
  namespace isThisSecond {}

  function isThisWeek(date: DateOrStringOrNumber, options?: {weekStartsOn: number}): boolean;
  namespace isThisWeek {}

  function isThisYear(date: DateOrStringOrNumber): boolean;
  namespace isThisYear {}

  function isThursday(date: DateOrStringOrNumber): boolean;
  namespace isThursday {}

  function isToday(date: DateOrStringOrNumber): boolean;
  namespace isToday {}

  function isTomorrow(date: DateOrStringOrNumber): boolean;
  namespace isTomorrow {}

  function isTuesday(date: DateOrStringOrNumber): boolean;
  namespace isTuesday {}

  function isValid(date: Date): boolean;
  namespace isValid {}

  function isWednesday(date: DateOrStringOrNumber): boolean;
  namespace isWednesday {}

  function isWeekend(date: DateOrStringOrNumber): boolean;
  namespace isWeekend {}

  function isWithinRange(date: DateOrStringOrNumber, startDate: DateOrStringOrNumber, endDate: DateOrStringOrNumber): boolean;
  namespace isWithinRange {}

  function isYesterday(date: DateOrStringOrNumber): boolean;
  namespace isYesterday {}

  function lastDayOfISOWeek(date: DateOrStringOrNumber): Date;
  namespace lastDayOfISOWeek {}

  function lastDayOfISOYear(date: DateOrStringOrNumber): Date;
  namespace lastDayOfISOYear {}

  function lastDayOfMonth(date: DateOrStringOrNumber): Date;
  namespace lastDayOfMonth {}

  function lastDayOfQuarter(date: DateOrStringOrNumber): Date;
  namespace lastDayOfQuarter {}

  function lastDayOfWeek(date: DateOrStringOrNumber, options?: {weekStartsOn: number}): Date;
  namespace lastDayOfWeek {}

  function lastDayOfYear(date: DateOrStringOrNumber): Date;
  namespace lastDayOfYear {}

  function max(...dates: DateOrStringOrNumber[]): Date;
  namespace max {}

  function min(...dates: DateOrStringOrNumber[]): Date;
  namespace min {}

  function parse(dateString: string): Date;
  namespace parse {}

  function setDate(date: DateOrStringOrNumber, dayOfMonth: number): Date;
  namespace setDate {}

  function setDay(date: DateOrStringOrNumber, day: number, options?: {weekStartsOn: number}): Date;
  namespace setDay {}

  function setDayOfYear(date: DateOrStringOrNumber, dayOfYear: number): Date;
  namespace setDayOfYear {}

  function setHours(date: DateOrStringOrNumber, hours: number): Date;
  namespace setHours {}

  function setISOWeek(date: DateOrStringOrNumber, isoWeek: number): Date;
  namespace setISOWeek {}

  function setISOYear(date: DateOrStringOrNumber, isoYear: number): Date;
  namespace setISOYear {}

  function setMilliseconds(date: DateOrStringOrNumber, milliseconds: number): Date;
  namespace setMilliseconds {}

  function setMinutes(date: DateOrStringOrNumber, minutes: number): Date;
  namespace setMinutes {}

  function setMonth(date: DateOrStringOrNumber, month: number): Date;
  namespace setMonth {}

  function setQuarter(date: DateOrStringOrNumber, quarter: number): Date;
  namespace setQuarter {}

  function setSeconds(date: DateOrStringOrNumber, seconds: number): Date;
  namespace setSeconds {}

  function setYear(date: DateOrStringOrNumber, year: number): Date;
  namespace setYear {}

  function startOfDay(date: DateOrStringOrNumber): Date;
  namespace startOfDay {}

  function startOfHour(date: DateOrStringOrNumber): Date;
  namespace startOfHour {}

  function startOfISOWeek(date: DateOrStringOrNumber): Date;
  namespace startOfISOWeek {}

  function startOfISOYear(date: DateOrStringOrNumber): Date;
  namespace startOfISOYear {}

  function startOfMinute(date: DateOrStringOrNumber): Date;
  namespace startOfMinute {}

  function startOfMonth(date: DateOrStringOrNumber): Date;
  namespace startOfMonth {}

  function startOfQuarter(date: DateOrStringOrNumber): Date;
  namespace startOfQuarter {}

  function startOfSecond(date: DateOrStringOrNumber): Date;
  namespace startOfSecond {}

  function startOfToday(): Date;
  namespace startOfToday {}

  function startOfTomorrow(): Date;
  namespace startOfTomorrow {}

  function startOfWeek(date: DateOrStringOrNumber, options?: {weekStartsOn: number}): Date;
  namespace startOfWeek {}

  function startOfYear(date: DateOrStringOrNumber): Date;
  namespace startOfYear {}

  function startOfYesterday(): Date;
  namespace startOfYesterday {}

  function subDays(date: DateOrStringOrNumber, amount: number): Date;
  namespace subDays {}

  function subHours(date: DateOrStringOrNumber, amount: number): Date;
  namespace subHours {}

  function subISOYears(date: DateOrStringOrNumber, amount: number): Date;
  namespace subISOYears {}

  function subMilliseconds(date: DateOrStringOrNumber, amount: number): Date;
  namespace subMilliseconds {}

  function subMinutes(date: DateOrStringOrNumber, amount: number): Date;
  namespace subMinutes {}

  function subMonths(date: DateOrStringOrNumber, amount: number): Date;
  namespace subMonths {}

  function subQuarters(date: DateOrStringOrNumber, amount: number): Date;
  namespace subQuarters {}

  function subSeconds(date: DateOrStringOrNumber, amount: number): Date;
  namespace subSeconds {}

  function subWeeks(date: DateOrStringOrNumber, amount: number): Date;
  namespace subWeeks {}

  function subYears(date: DateOrStringOrNumber, amount: number): Date;
  namespace subYears {}

  namespace locale {
    export var ca: Formatters;
    export var da: Formatters;
    export var de: Formatters;
    export var el: Formatters;
    export var en: Formatters;
    export var eo: Formatters;
    export var es: Formatters;
    export var fil: Formatters;
    export var fr: Formatters;
    export var id: Formatters;
    export var it: Formatters;
    export var ja: Formatters;
    export var ko: Formatters;
    export var nb: Formatters;
    export var nl: Formatters;
    export var pl: Formatters;
    export var pt: Formatters;
    export var ru: Formatters;
    export var sk: Formatters;
    export var sv: Formatters;
    export var tr: Formatters;
    export var zh_cn: Formatters;
    export var zh_tw: Formatters;
  }
}

declare module '@ukyo/date-fns/add_days' {
  import {addDays} from '@ukyo/date-fns';
  export = addDays;
}

declare module '@ukyo/date-fns/add_hours' {
  import {addHours} from '@ukyo/date-fns';
  export = addHours;
}

declare module '@ukyo/date-fns/add_iso_years' {
  import {addISOYears} from '@ukyo/date-fns';
  export = addISOYears;
}

declare module '@ukyo/date-fns/add_milliseconds' {
  import {addMilliseconds} from '@ukyo/date-fns';
  export = addMilliseconds;
}

declare module '@ukyo/date-fns/add_minutes' {
  import {addMinutes} from '@ukyo/date-fns';
  export = addMinutes;
}

declare module '@ukyo/date-fns/add_months' {
  import {addMonths} from '@ukyo/date-fns';
  export = addMonths;
}

declare module '@ukyo/date-fns/add_quarters' {
  import {addQuarters} from '@ukyo/date-fns';
  export = addQuarters;
}

declare module '@ukyo/date-fns/add_seconds' {
  import {addSeconds} from '@ukyo/date-fns';
  export = addSeconds;
}

declare module '@ukyo/date-fns/add_weeks' {
  import {addWeeks} from '@ukyo/date-fns';
  export = addWeeks;
}

declare module '@ukyo/date-fns/add_years' {
  import {addYears} from '@ukyo/date-fns';
  export = addYears;
}

declare module '@ukyo/date-fns/closest_index_to' {
  import {closestIndexTo} from '@ukyo/date-fns';
  export = closestIndexTo;
}

declare module '@ukyo/date-fns/closest_to' {
  import {closestTo} from '@ukyo/date-fns';
  export = closestTo;
}

declare module '@ukyo/date-fns/compare_asc' {
  import {compareAsc} from '@ukyo/date-fns';
  export = compareAsc;
}

declare module '@ukyo/date-fns/compare_desc' {
  import {compareDesc} from '@ukyo/date-fns';
  export = compareDesc;
}

declare module '@ukyo/date-fns/difference_in_calendar_days' {
  import {differenceInCalendarDays} from '@ukyo/date-fns';
  export = differenceInCalendarDays;
}

declare module '@ukyo/date-fns/difference_in_calendar_iso_weeks' {
  import {differenceInCalendarISOWeeks} from '@ukyo/date-fns';
  export = differenceInCalendarISOWeeks;
}

declare module '@ukyo/date-fns/difference_in_calendar_iso_years' {
  import {differenceInCalendarISOYears} from '@ukyo/date-fns';
  export = differenceInCalendarISOYears;
}

declare module '@ukyo/date-fns/difference_in_calendar_months' {
  import {differenceInCalendarMonths} from '@ukyo/date-fns';
  export = differenceInCalendarMonths;
}

declare module '@ukyo/date-fns/difference_in_calendar_quarters' {
  import {differenceInCalendarQuarters} from '@ukyo/date-fns';
  export = differenceInCalendarQuarters;
}

declare module '@ukyo/date-fns/difference_in_calendar_weeks' {
  import {differenceInCalendarWeeks} from '@ukyo/date-fns';
  export = differenceInCalendarWeeks;
}

declare module '@ukyo/date-fns/difference_in_calendar_years' {
  import {differenceInCalendarYears} from '@ukyo/date-fns';
  export = differenceInCalendarYears;
}

declare module '@ukyo/date-fns/difference_in_days' {
  import {differenceInDays} from '@ukyo/date-fns';
  export = differenceInDays;
}

declare module '@ukyo/date-fns/difference_in_hours' {
  import {differenceInHours} from '@ukyo/date-fns';
  export = differenceInHours;
}

declare module '@ukyo/date-fns/difference_in_iso_years' {
  import {differenceInISOYears} from '@ukyo/date-fns';
  export = differenceInISOYears;
}

declare module '@ukyo/date-fns/difference_in_milliseconds' {
  import {differenceInMilliseconds} from '@ukyo/date-fns';
  export = differenceInMilliseconds;
}

declare module '@ukyo/date-fns/difference_in_minutes' {
  import {differenceInMinutes} from '@ukyo/date-fns';
  export = differenceInMinutes;
}

declare module '@ukyo/date-fns/difference_in_months' {
  import {differenceInMonths} from '@ukyo/date-fns';
  export = differenceInMonths;
}

declare module '@ukyo/date-fns/difference_in_quarters' {
  import {differenceInQuarters} from '@ukyo/date-fns';
  export = differenceInQuarters;
}

declare module '@ukyo/date-fns/difference_in_seconds' {
  import {differenceInSeconds} from '@ukyo/date-fns';
  export = differenceInSeconds;
}

declare module '@ukyo/date-fns/difference_in_weeks' {
  import {differenceInWeeks} from '@ukyo/date-fns';
  export = differenceInWeeks;
}

declare module '@ukyo/date-fns/difference_in_years' {
  import {differenceInYears} from '@ukyo/date-fns';
  export = differenceInYears;
}

declare module '@ukyo/date-fns/distance_in_words' {
  import {distanceInWords} from '@ukyo/date-fns';
  export = distanceInWords;
}

declare module '@ukyo/date-fns/distance_in_words_to_now' {
  import {distanceInWordsToNow} from '@ukyo/date-fns';
  export = distanceInWordsToNow;
}

declare module '@ukyo/date-fns/each_day' {
  import {eachDay} from '@ukyo/date-fns';
  export = eachDay;
}

declare module '@ukyo/date-fns/end_of_day' {
  import {endOfDay} from '@ukyo/date-fns';
  export = endOfDay;
}

declare module '@ukyo/date-fns/end_of_hour' {
  import {endOfHour} from '@ukyo/date-fns';
  export = endOfHour;
}

declare module '@ukyo/date-fns/end_of_iso_week' {
  import {endOfISOWeek} from '@ukyo/date-fns';
  export = endOfISOWeek;
}

declare module '@ukyo/date-fns/end_of_iso_year' {
  import {endOfISOYear} from '@ukyo/date-fns';
  export = endOfISOYear;
}

declare module '@ukyo/date-fns/end_of_minute' {
  import {endOfMinute} from '@ukyo/date-fns';
  export = endOfMinute;
}

declare module '@ukyo/date-fns/end_of_month' {
  import {endOfMonth} from '@ukyo/date-fns';
  export = endOfMonth;
}

declare module '@ukyo/date-fns/end_of_quarter' {
  import {endOfQuarter} from '@ukyo/date-fns';
  export = endOfQuarter;
}

declare module '@ukyo/date-fns/end_of_second' {
  import {endOfSecond} from '@ukyo/date-fns';
  export = endOfSecond;
}

declare module '@ukyo/date-fns/end_of_today' {
  import {endOfToday} from '@ukyo/date-fns';
  export = endOfToday;
}

declare module '@ukyo/date-fns/end_of_tomorrow' {
  import {endOfTomorrow} from '@ukyo/date-fns';
  export = endOfTomorrow;
}

declare module '@ukyo/date-fns/end_of_week' {
  import {endOfWeek} from '@ukyo/date-fns';
  export = endOfWeek;
}

declare module '@ukyo/date-fns/end_of_year' {
  import {endOfYear} from '@ukyo/date-fns';
  export = endOfYear;
}

declare module '@ukyo/date-fns/end_of_yesterday' {
  import {endOfYesterday} from '@ukyo/date-fns';
  export = endOfYesterday;
}

declare module '@ukyo/date-fns/format' {
  import {format} from '@ukyo/date-fns';
  export = format;
}

declare module '@ukyo/date-fns/get_date' {
  import {getDate} from '@ukyo/date-fns';
  export = getDate;
}

declare module '@ukyo/date-fns/get_day' {
  import {getDay} from '@ukyo/date-fns';
  export = getDay;
}

declare module '@ukyo/date-fns/get_day_of_year' {
  import {getDayOfYear} from '@ukyo/date-fns';
  export = getDayOfYear;
}

declare module '@ukyo/date-fns/get_days_in_month' {
  import {getDaysInMonth} from '@ukyo/date-fns';
  export = getDaysInMonth;
}

declare module '@ukyo/date-fns/get_days_in_year' {
  import {getDaysInYear} from '@ukyo/date-fns';
  export = getDaysInYear;
}

declare module '@ukyo/date-fns/get_hours' {
  import {getHours} from '@ukyo/date-fns';
  export = getHours;
}

declare module '@ukyo/date-fns/get_iso_week' {
  import {getISOWeek} from '@ukyo/date-fns';
  export = getISOWeek;
}

declare module '@ukyo/date-fns/get_iso_weeks_in_year' {
  import {getISOWeeksInYear} from '@ukyo/date-fns';
  export = getISOWeeksInYear;
}

declare module '@ukyo/date-fns/get_iso_year' {
  import {getISOYear} from '@ukyo/date-fns';
  export = getISOYear;
}

declare module '@ukyo/date-fns/get_milliseconds' {
  import {getMilliseconds} from '@ukyo/date-fns';
  export = getMilliseconds;
}

declare module '@ukyo/date-fns/get_minutes' {
  import {getMinutes} from '@ukyo/date-fns';
  export = getMinutes;
}

declare module '@ukyo/date-fns/get_month' {
  import {getMonth} from '@ukyo/date-fns';
  export = getMonth;
}

declare module '@ukyo/date-fns/get_quarter' {
  import {getQuarter} from '@ukyo/date-fns';
  export = getQuarter;
}

declare module '@ukyo/date-fns/get_seconds' {
  import {getSeconds} from '@ukyo/date-fns';
  export = getSeconds;
}

declare module '@ukyo/date-fns/get_year' {
  import {getYear} from '@ukyo/date-fns';
  export = getYear;
}

declare module '@ukyo/date-fns/is_after' {
  import {isAfter} from '@ukyo/date-fns';
  export = isAfter;
}

declare module '@ukyo/date-fns/is_before' {
  import {isBefore} from '@ukyo/date-fns';
  export = isBefore;
}

declare module '@ukyo/date-fns/is_date' {
  import {isDate} from '@ukyo/date-fns';
  export = isDate;
}

declare module '@ukyo/date-fns/is_equal' {
  import {isEqual} from '@ukyo/date-fns';
  export = isEqual;
}

declare module '@ukyo/date-fns/is_first_day_of_month' {
  import {isFirstDayOfMonth} from '@ukyo/date-fns';
  export = isFirstDayOfMonth;
}

declare module '@ukyo/date-fns/is_friday' {
  import {isFriday} from '@ukyo/date-fns';
  export = isFriday;
}

declare module '@ukyo/date-fns/is_future' {
  import {isFuture} from '@ukyo/date-fns';
  export = isFuture;
}

declare module '@ukyo/date-fns/is_last_day_of_month' {
  import {isLastDayOfMonth} from '@ukyo/date-fns';
  export = isLastDayOfMonth;
}

declare module '@ukyo/date-fns/is_leap_year' {
  import {isLeapYear} from '@ukyo/date-fns';
  export = isLeapYear;
}

declare module '@ukyo/date-fns/is_monday' {
  import {isMonday} from '@ukyo/date-fns';
  export = isMonday;
}

declare module '@ukyo/date-fns/is_past' {
  import {isPast} from '@ukyo/date-fns';
  export = isPast;
}

declare module '@ukyo/date-fns/is_same_day' {
  import {isSameDay} from '@ukyo/date-fns';
  export = isSameDay;
}

declare module '@ukyo/date-fns/is_same_hour' {
  import {isSameHour} from '@ukyo/date-fns';
  export = isSameHour;
}

declare module '@ukyo/date-fns/is_same_iso_week' {
  import {isSameISOWeek} from '@ukyo/date-fns';
  export = isSameISOWeek;
}

declare module '@ukyo/date-fns/is_same_iso_year' {
  import {isSameISOYear} from '@ukyo/date-fns';
  export = isSameISOYear;
}

declare module '@ukyo/date-fns/is_same_minute' {
  import {isSameMinute} from '@ukyo/date-fns';
  export = isSameMinute;
}

declare module '@ukyo/date-fns/is_same_month' {
  import {isSameMonth} from '@ukyo/date-fns';
  export = isSameMonth;
}

declare module '@ukyo/date-fns/is_same_quarter' {
  import {isSameQuarter} from '@ukyo/date-fns';
  export = isSameQuarter;
}

declare module '@ukyo/date-fns/is_same_second' {
  import {isSameSecond} from '@ukyo/date-fns';
  export = isSameSecond;
}

declare module '@ukyo/date-fns/is_same_week' {
  import {isSameWeek} from '@ukyo/date-fns';
  export = isSameWeek;
}

declare module '@ukyo/date-fns/is_same_year' {
  import {isSameYear} from '@ukyo/date-fns';
  export = isSameYear;
}

declare module '@ukyo/date-fns/is_saturday' {
  import {isSaturday} from '@ukyo/date-fns';
  export = isSaturday;
}

declare module '@ukyo/date-fns/is_sunday' {
  import {isSunday} from '@ukyo/date-fns';
  export = isSunday;
}

declare module '@ukyo/date-fns/is_this_hour' {
  import {isThisHour} from '@ukyo/date-fns';
  export = isThisHour;
}

declare module '@ukyo/date-fns/is_this_iso_week' {
  import {isThisISOWeek} from '@ukyo/date-fns';
  export = isThisISOWeek;
}

declare module '@ukyo/date-fns/is_this_iso_year' {
  import {isThisISOYear} from '@ukyo/date-fns';
  export = isThisISOYear;
}

declare module '@ukyo/date-fns/is_this_minute' {
  import {isThisMinute} from '@ukyo/date-fns';
  export = isThisMinute;
}

declare module '@ukyo/date-fns/is_this_month' {
  import {isThisMonth} from '@ukyo/date-fns';
  export = isThisMonth;
}

declare module '@ukyo/date-fns/is_this_quarter' {
  import {isThisQuarter} from '@ukyo/date-fns';
  export = isThisQuarter;
}

declare module '@ukyo/date-fns/is_this_second' {
  import {isThisSecond} from '@ukyo/date-fns';
  export = isThisSecond;
}

declare module '@ukyo/date-fns/is_this_week' {
  import {isThisWeek} from '@ukyo/date-fns';
  export = isThisWeek;
}

declare module '@ukyo/date-fns/is_this_year' {
  import {isThisYear} from '@ukyo/date-fns';
  export = isThisYear;
}

declare module '@ukyo/date-fns/is_thursday' {
  import {isThursday} from '@ukyo/date-fns';
  export = isThursday;
}

declare module '@ukyo/date-fns/is_today' {
  import {isToday} from '@ukyo/date-fns';
  export = isToday;
}

declare module '@ukyo/date-fns/is_tomorrow' {
  import {isTomorrow} from '@ukyo/date-fns';
  export = isTomorrow;
}

declare module '@ukyo/date-fns/is_tuesday' {
  import {isTuesday} from '@ukyo/date-fns';
  export = isTuesday;
}

declare module '@ukyo/date-fns/is_valid' {
  import {isValid} from '@ukyo/date-fns';
  export = isValid;
}

declare module '@ukyo/date-fns/is_wednesday' {
  import {isWednesday} from '@ukyo/date-fns';
  export = isWednesday;
}

declare module '@ukyo/date-fns/is_weekend' {
  import {isWeekend} from '@ukyo/date-fns';
  export = isWeekend;
}

declare module '@ukyo/date-fns/is_within_range' {
  import {isWithinRange} from '@ukyo/date-fns';
  export = isWithinRange;
}

declare module '@ukyo/date-fns/is_yesterday' {
  import {isYesterday} from '@ukyo/date-fns';
  export = isYesterday;
}

declare module '@ukyo/date-fns/last_day_of_iso_week' {
  import {lastDayOfISOWeek} from '@ukyo/date-fns';
  export = lastDayOfISOWeek;
}

declare module '@ukyo/date-fns/last_day_of_iso_year' {
  import {lastDayOfISOYear} from '@ukyo/date-fns';
  export = lastDayOfISOYear;
}

declare module '@ukyo/date-fns/last_day_of_month' {
  import {lastDayOfMonth} from '@ukyo/date-fns';
  export = lastDayOfMonth;
}

declare module '@ukyo/date-fns/last_day_of_quarter' {
  import {lastDayOfQuarter} from '@ukyo/date-fns';
  export = lastDayOfQuarter;
}

declare module '@ukyo/date-fns/last_day_of_week' {
  import {lastDayOfWeek} from '@ukyo/date-fns';
  export = lastDayOfWeek;
}

declare module '@ukyo/date-fns/last_day_of_year' {
  import {lastDayOfYear} from '@ukyo/date-fns';
  export = lastDayOfYear;
}

declare module '@ukyo/date-fns/max' {
  import {max} from '@ukyo/date-fns';
  export = max;
}

declare module '@ukyo/date-fns/min' {
  import {min} from '@ukyo/date-fns';
  export = min;
}

declare module '@ukyo/date-fns/parse' {
  import {parse} from '@ukyo/date-fns';
  export = parse;
}

declare module '@ukyo/date-fns/set_date' {
  import {setDate} from '@ukyo/date-fns';
  export = setDate;
}

declare module '@ukyo/date-fns/set_day' {
  import {setDay} from '@ukyo/date-fns';
  export = setDay;
}

declare module '@ukyo/date-fns/set_day_of_year' {
  import {setDayOfYear} from '@ukyo/date-fns';
  export = setDayOfYear;
}

declare module '@ukyo/date-fns/set_hours' {
  import {setHours} from '@ukyo/date-fns';
  export = setHours;
}

declare module '@ukyo/date-fns/set_iso_week' {
  import {setISOWeek} from '@ukyo/date-fns';
  export = setISOWeek;
}

declare module '@ukyo/date-fns/set_iso_year' {
  import {setISOYear} from '@ukyo/date-fns';
  export = setISOYear;
}

declare module '@ukyo/date-fns/set_milliseconds' {
  import {setMilliseconds} from '@ukyo/date-fns';
  export = setMilliseconds;
}

declare module '@ukyo/date-fns/set_minutes' {
  import {setMinutes} from '@ukyo/date-fns';
  export = setMinutes;
}

declare module '@ukyo/date-fns/set_month' {
  import {setMonth} from '@ukyo/date-fns';
  export = setMonth;
}

declare module '@ukyo/date-fns/set_quarter' {
  import {setQuarter} from '@ukyo/date-fns';
  export = setQuarter;
}

declare module '@ukyo/date-fns/set_seconds' {
  import {setSeconds} from '@ukyo/date-fns';
  export = setSeconds;
}

declare module '@ukyo/date-fns/set_year' {
  import {setYear} from '@ukyo/date-fns';
  export = setYear;
}

declare module '@ukyo/date-fns/start_of_day' {
  import {startOfDay} from '@ukyo/date-fns';
  export = startOfDay;
}

declare module '@ukyo/date-fns/start_of_hour' {
  import {startOfHour} from '@ukyo/date-fns';
  export = startOfHour;
}

declare module '@ukyo/date-fns/start_of_iso_week' {
  import {startOfISOWeek} from '@ukyo/date-fns';
  export = startOfISOWeek;
}

declare module '@ukyo/date-fns/start_of_iso_year' {
  import {startOfISOYear} from '@ukyo/date-fns';
  export = startOfISOYear;
}

declare module '@ukyo/date-fns/start_of_minute' {
  import {startOfMinute} from '@ukyo/date-fns';
  export = startOfMinute;
}

declare module '@ukyo/date-fns/start_of_month' {
  import {startOfMonth} from '@ukyo/date-fns';
  export = startOfMonth;
}

declare module '@ukyo/date-fns/start_of_quarter' {
  import {startOfQuarter} from '@ukyo/date-fns';
  export = startOfQuarter;
}

declare module '@ukyo/date-fns/start_of_second' {
  import {startOfSecond} from '@ukyo/date-fns';
  export = startOfSecond;
}

declare module '@ukyo/date-fns/start_of_today' {
  import {startOfToday} from '@ukyo/date-fns';
  export = startOfToday;
}

declare module '@ukyo/date-fns/start_of_tomorrow' {
  import {startOfTomorrow} from '@ukyo/date-fns';
  export = startOfTomorrow;
}

declare module '@ukyo/date-fns/start_of_week' {
  import {startOfWeek} from '@ukyo/date-fns';
  export = startOfWeek;
}

declare module '@ukyo/date-fns/start_of_year' {
  import {startOfYear} from '@ukyo/date-fns';
  export = startOfYear;
}

declare module '@ukyo/date-fns/start_of_yesterday' {
  import {startOfYesterday} from '@ukyo/date-fns';
  export = startOfYesterday;
}

declare module '@ukyo/date-fns/sub_days' {
  import {subDays} from '@ukyo/date-fns';
  export = subDays;
}

declare module '@ukyo/date-fns/sub_hours' {
  import {subHours} from '@ukyo/date-fns';
  export = subHours;
}

declare module '@ukyo/date-fns/sub_iso_years' {
  import {subISOYears} from '@ukyo/date-fns';
  export = subISOYears;
}

declare module '@ukyo/date-fns/sub_milliseconds' {
  import {subMilliseconds} from '@ukyo/date-fns';
  export = subMilliseconds;
}

declare module '@ukyo/date-fns/sub_minutes' {
  import {subMinutes} from '@ukyo/date-fns';
  export = subMinutes;
}

declare module '@ukyo/date-fns/sub_months' {
  import {subMonths} from '@ukyo/date-fns';
  export = subMonths;
}

declare module '@ukyo/date-fns/sub_quarters' {
  import {subQuarters} from '@ukyo/date-fns';
  export = subQuarters;
}

declare module '@ukyo/date-fns/sub_seconds' {
  import {subSeconds} from '@ukyo/date-fns';
  export = subSeconds;
}

declare module '@ukyo/date-fns/sub_weeks' {
  import {subWeeks} from '@ukyo/date-fns';
  export = subWeeks;
}

declare module '@ukyo/date-fns/sub_years' {
  import {subYears} from '@ukyo/date-fns';
  export = subYears;
}

declare module '@ukyo/date-fns/locale' {
  import {locale} from '@ukyo/date-fns';
  export = locale;
}

declare module '@ukyo/date-fns/locale/ca' {
  import {ca} from '@ukyo/date-fns/locale';
  export = ca;
}

declare module '@ukyo/date-fns/locale/da' {
  import {da} from '@ukyo/date-fns/locale';
  export = da;
}

declare module '@ukyo/date-fns/locale/de' {
  import {de} from '@ukyo/date-fns/locale';
  export = de;
}

declare module '@ukyo/date-fns/locale/el' {
  import {el} from '@ukyo/date-fns/locale';
  export = el;
}

declare module '@ukyo/date-fns/locale/en' {
  import {en} from '@ukyo/date-fns/locale';
  export = en;
}

declare module '@ukyo/date-fns/locale/eo' {
  import {eo} from '@ukyo/date-fns/locale';
  export = eo;
}

declare module '@ukyo/date-fns/locale/es' {
  import {es} from '@ukyo/date-fns/locale';
  export = es;
}

declare module '@ukyo/date-fns/locale/fil' {
  import {fil} from '@ukyo/date-fns/locale';
  export = fil;
}

declare module '@ukyo/date-fns/locale/fr' {
  import {fr} from '@ukyo/date-fns/locale';
  export = fr;
}

declare module '@ukyo/date-fns/locale/id' {
  import {id} from '@ukyo/date-fns/locale';
  export = id;
}

declare module '@ukyo/date-fns/locale/it' {
  import {it} from '@ukyo/date-fns/locale';
  export = it;
}

declare module '@ukyo/date-fns/locale/ja' {
  import {ja} from '@ukyo/date-fns/locale';
  export = ja;
}

declare module '@ukyo/date-fns/locale/ko' {
  import {ko} from '@ukyo/date-fns/locale';
  export = ko;
}

declare module '@ukyo/date-fns/locale/nb' {
  import {nb} from '@ukyo/date-fns/locale';
  export = nb;
}

declare module '@ukyo/date-fns/locale/nl' {
  import {nl} from '@ukyo/date-fns/locale';
  export = nl;
}

declare module '@ukyo/date-fns/locale/pl' {
  import {pl} from '@ukyo/date-fns/locale';
  export = pl;
}

declare module '@ukyo/date-fns/locale/pt' {
  import {pt} from '@ukyo/date-fns/locale';
  export = pt;
}

declare module '@ukyo/date-fns/locale/ru' {
  import {ru} from '@ukyo/date-fns/locale';
  export = ru;
}

declare module '@ukyo/date-fns/locale/sk' {
  import {sk} from '@ukyo/date-fns/locale';
  export = sk;
}

declare module '@ukyo/date-fns/locale/sv' {
  import {sv} from '@ukyo/date-fns/locale';
  export = sv;
}

declare module '@ukyo/date-fns/locale/tr' {
  import {tr} from '@ukyo/date-fns/locale';
  export = tr;
}

declare module '@ukyo/date-fns/locale/zh_cn' {
  import {zh_cn} from '@ukyo/date-fns/locale';
  export = zh_cn;
}

declare module '@ukyo/date-fns/locale/zh_tw' {
  import {zh_tw} from '@ukyo/date-fns/locale';
  export = zh_tw;
}
