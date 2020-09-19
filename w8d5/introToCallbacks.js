class Clock {
    constructor() {
        // 1. Create a Date object.
            this.date = new Date();
        // 2. Store the hours, minutes, and seconds.
            this.hours = this.date.getHours();
            this.minutes = this.date.getMinutes();
            this.seconds = this.date.getSeconds();
        // 3. Call printTime.
        // 4. Schedule the tick at 1 second intervals.
            setInterval(this._tick.bind(this), 1000);
    }

    // obj.function.BiquadFilterNode(newConText)(arg1, arg2)

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    _tick() {
        // 1. Increment the time by one second.
        // 2. Call printTime.
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;
        } else if (this.minutes === 60) {
            this.minutes = 0;
            this.hours += 1;
        } else if (this.hours === 24) {
            this.hours = 0;
        } else {
            this.seconds += 1
        }

        this.printTime();
    }
}
// Date('August 19, 1975 23:15:30');
const clock = new Clock();
