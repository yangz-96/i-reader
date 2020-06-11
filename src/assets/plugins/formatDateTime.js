function formatDateTime (date, format) {
    var newDate = new Date(date);
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    var o = {
        'M+': newDate.getMonth() + 1,
        'd+': newDate.getDate(),
        'h+': newDate.getHours(),
        'm+': newDate.getMinutes(),
        's+': newDate.getSeconds()
    };
    for (var k in o) {
        if (new RegExp('('+k+')').test(format)) {
            var str = o[k] + '';
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length));
        }
    }
    return format;
}

export default formatDateTime

