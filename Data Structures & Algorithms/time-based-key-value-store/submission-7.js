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
        timeMap.push([timestamp, value])
      } else {
      let timeMap = []
      timeMap.push([timestamp, value])
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
      let left = 0;
      let right = timeKey.length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let time = timeKey[mid][0]
        if (time === timestamp) {
          return timeKey[mid][1]
        }
        else if (time > timestamp) {
          right = mid - 1
        } else {
          result = timeKey[mid][1]
          left = mid + 1
        }
      }
      return result 
    }
}
