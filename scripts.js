function CalculateTime() {
    function display(num, singular) {
        if(num == 1) {
            return num + ' ' + singular;
        } else {
            return num + ' ' + singular + 's';
        }
    }
    
    var worstCaseScheduled = moment('2014-12-04 21:00');
    var bestCaseArrival = moment();
    var duration = moment.duration(bestCaseArrival.diff(worstCaseScheduled));
    
    $('.time--days').text(display(Math.floor(duration.asDays()), 'day'));
    $('.time--hours').text(display(duration.hours(), 'hour'));
    $('.time--minutes').text(display(duration.minutes(), 'minute'));
    $('.time--seconds').text(display(duration.seconds(), 'second'));
}

CalculateTime();
setInterval(CalculateTime, 1000);