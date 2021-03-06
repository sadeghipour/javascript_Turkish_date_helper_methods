class DateConverter {
    getNextMonth = (monthAfter,startMonthAfter="dec 01, 2017",dateFormat='long',lang='tr-TR') => {
        let monthList = [];
        let date = new Date(startMonthAfter);
        for (let i = 0; i < monthAfter; i++) {
            date.setMonth(date.getMonth() + 1);
            let val = date.toLocaleString(lang, {
                month: dateFormat,
            });
            monthList.push({val: val, text: val});
        }
        return monthList;
    };

    getBetweenYears = (startYear, endYear,sort='asc') => {
        let yearSelectBoxObj = [];
        for (let i = startYear; i <= endYear; i++) {
            if(sort==='asc'){
                yearSelectBoxObj.push({val: i, text: i});
            }else{
                yearSelectBoxObj.unshift({val: i, text: i});

            }
        }
        return yearSelectBoxObj;
    }
}

export default DateConverter;
