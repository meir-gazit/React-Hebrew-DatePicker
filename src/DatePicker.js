import React, { useState } from "react"
import moment from 'moment'
import "react-dates/initialize"
import { DateRangePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"

moment.locale('he', {
    months : 'תשרי_חשון_כסלו_טבת_שבט_אדר_ניסן_אייר_סיון_תמוז_אב_אלול'.split('_'),
    monthsShort : 'תשרי._חשון._כסלו._טבת._שבט._אדר._ניסן._אייר._סיון._תמוז._אב._אלול.'.split('_'),
    monthsParseExact : true,
    weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort : 'א._ב._ג._ד._ה._ו._ש.'.split('_'),
    weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay : '[היום] LT',
        nextDay : '[מחר] LT',
        nextWeek : 'dddd [שבוע הבא] LT',
        lastDay : '[אתמול] LT',
        lastWeek : 'dddd [שבוע שעבר] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future : 'בעתיד %s',
        past : 'בעבר %s',
        s : 'שניות',
        m : 'דקה',
        mm : '%d דקות',
        h : 'שעה',
        hh : '%d שעות',
        d : 'יום',
        dd : '%d ימים',
        M : 'חודש',
        MM : '%d חודשים',
        y : 'שנה',
        yy : '%d שנים'
    },
    dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse : /PD|MD/,
    isPM : function (input) {
        return input.charAt(0) === 'M';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week : {
        dow : 0, // Monday is the first day of the week.
        doy : 4  // Used to determine first week of the year.
    }
})

function DatePicker() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }
  return (
    <div style={{ display: 'flex'}}>
      <DateRangePicker
        startDate={startDate}
        startDateId="tada-start-date"
        endDate={endDate}
        endDateId="tada-end-date"
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
      />
    </div>
  )
}

export default DatePicker
