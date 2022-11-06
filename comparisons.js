const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    // ..TODO..
    function translateTime(time){
        return parseInt(time.replace(":",""))
    }

    function translateHours(minutes){
        if(minutes > 60){
            return Math.floor(minutes / 60) + minutes % 60
        }
        return minutes
    }

    startTime = translateTime(startTime)
    dayStart2 = translateTime(dayStart)
    dayEnd2 = translateTime(dayEnd)
    parseDurationMinitues = (durationMinutes / 60) * 10

    if(startTime >= dayStart2 && startTime < dayEnd2 && (startTime + translateHours(durationMinutes)) < dayEnd2){
        return true
    }
    return false
}

console.log(scheduleMeeting("7:00",15));     // false
console.log(scheduleMeeting("07:15",30));    // false
console.log(scheduleMeeting("7:30",30));     // true
console.log(scheduleMeeting("11:30",60));    // true
console.log(scheduleMeeting("17:00",45));    // true
console.log(scheduleMeeting("17:30",30));    // false
console.log(scheduleMeeting("18:00",15));    // false
