class Clock {
  constructor() {
    // 1. Create a Date object.
    let date = new Date();

    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.second = date.getSeconds();

    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.second}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    if(this.second +1 < 60)
    {
      this.second += 1;
    }
    else if(this.second +1 === 60 ){
      this.second = 0;
      if (this.minutes +1 === 60){
        this.minutes = 0;
        this.hours += 1;
      }
      else {
        this.minutes += 1;
      }
    }
    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();
