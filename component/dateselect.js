define([
    'https://cdn.bootcss.com/moment.js/2.23.0/moment.min.js'
], function (moment) {
    return function (el, val) {
        console.log(el)
        console.log(val)
        val = val ? val : {};
        $(el.year).append("<option value=''>年</option>");
        for (var i = 2030; i >= 1980; i--) {
            $(el.year).append('<option value="' + i + '">' + i + '</option>');
        }
        //处理年
        if (val.year > 0) {
            $(el.year).val(val.year)
        }
        //渲染月
        readerMonth(el, val);
        if (val.month > 0) {
            $(el.month).val(val.month);
        }
        $(el.year).change(function() {
            readerMonth(el,val);
        })
    }

    function readerMonth(el, val) {
        el.month.options.length = 0;
        $(el.month).append("<option value=''>月</option>");
        for (var i = 1; i <= 12; i++) {
            $(el.month).append('<option value="' + i + '">' + i + '</option>');
        }
        if (val.day > 0) {
            $(el.day).val(val.day)
        }
        //渲染日
        readerDay(el, val);
        $(el.month).change(function () {
            readerDay(el, val)
        })
    }

    function readerDay(el, val) {
        if (el.day) {
            var dayNum = moment($(el.year).val() + "-" + $(el.month).val(), "YYYY-MM").daysInMonth();
            console.log(dayNum);
            el.day.options.length = 0;
            $(el.day).append('<option value="">日</option>');
            for (var i = 1; i <= dayNum; i++) {
                el.day.options.add(new Option(i, i));
            }
            if (val.day > 0) {
                $(el.day).val(val.day);
            }
        }
    }
});