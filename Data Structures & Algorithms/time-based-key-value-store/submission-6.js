class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
      if (this.keyStore.has(key)) {
        let timeMap = this.keyStore.get(key);
        timeMap.set(timestamp, value)
      } else {
      let timeMap = new Map();
      timeMap.set(timestamp, value)
     this.keyStore.set(key, timeMap)
      }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
      let result = "";
      let timeKey = this.keyStore.get(key);
      if (!timeKey) {
        return ""
      }
      for (let [time, val] of timeKey.entries()) {
        if (time > timestamp) break;
        result = val
      }
      return result
    }
}
