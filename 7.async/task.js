class AlarmClock {
  constructor(alarmCollection = [], intervalId = null) {
    this.alarmCollection = alarmCollection;
    this.intervalId = intervalId;
  }

  addClock(time, callback) {
    if (typeof(time) !== "string" || typeof(callback) !== "function") {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.find(item => item.time === time)) {
      console.warn("Уже присутствует звонок на это время");
    }

    this.alarmCollection.push({
      callback,
      time,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const minutes = String(now.getMinutes());
    const hours = String(now.getHours());
    return `${hours.length === 1 ? "0" + hours : hours}:${minutes.length === 1 ? "0" + minutes : minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(item => {
        if (item.time === this.getCurrentFormattedTime() && item.canCall) {
          item.canCall = false;
          item.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(item => {
      item.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}