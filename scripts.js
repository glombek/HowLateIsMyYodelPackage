function CalculateTime() {
    var worstCaseScheduled = moment('2014-12-04 21:00');
    var bestCaseArrival = moment();
    var duration = moment.duration(bestCaseArrival.diff(worstCaseScheduled));
    
    $('.time--days').text(Math.floor(duration.asDays()));
    $('.time--hours').text(duration.hours());
    $('.time--minutes').text(duration.minutes());
    $('.time--seconds').text(duration.seconds());
}

CalculateTime();
setInterval(CalculateTime, 1000);