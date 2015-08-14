var egret;
(function (egret) {
    var setIntervalCache = {};
    var setIntervalIndex = 0;
    var setIntervalCount = 0;
    /**
     * @language en_US
     * Specified function after a specified delay run (in milliseconds).
     * @param listener {Function} Listener function
     * @param thisObject {any} this object
     * @param delay {number} Delay time, in milliseconds
     * @param ...args {any} Parameter list
     * @returns {number} Return index which can be used for clearInterval
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/utils/setInterval.ts
     */
    /**
     * @language zh_CN
     * 在指定的延迟（以毫秒为单位）后运行指定的函数。
     * @param listener {Function} 侦听函数
     * @param thisObject {any} this对象
     * @param delay {number} 延迟时间，以毫秒为单位
     * @param ...args {any} 参数列表
     * @returns {number} 返回索引，可以用于 clearInterval
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/utils/setInterval.ts
     */
    function setInterval(listener, thisObject, delay) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        var data = { listener: listener, thisObject: thisObject, delay: delay, originDelay: delay, params: args };
        setIntervalCount++;
        if (setIntervalCount == 1) {
            egret.sys.$ticker.$startTick(intervalUpdate, null);
        }
        setIntervalIndex++;
        setIntervalCache[setIntervalIndex] = data;
        return setIntervalIndex;
    }
    egret.setInterval = setInterval;
    /**
     * @language en_US
     * Clear function to run after a specified delay.
     * @param key {number} Index that egret.setInterval returns
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/utils/setInterval.ts
     */
    /**
     * @language zh_CN
     * 清除指定延迟后运行的函数。
     * @param key {number} egret.setInterval所返回的索引
     * @version Egret 2.0
     * @platform Web,Native
     * @includeExample egret/utils/setInterval.ts
     */
    function clearInterval(key) {
        if (setIntervalCache[key]) {
            setIntervalCount--;
            delete setIntervalCache[key];
            if (setIntervalCount == 0) {
                egret.sys.$ticker.$stopTick(intervalUpdate, null);
            }
        }
    }
    egret.clearInterval = clearInterval;
    /**
     * @private
     *
     * @param dt
     */
    function intervalUpdate(dt) {
        for (var key in setIntervalCache) {
            var data = setIntervalCache[key];
            data.delay -= dt;
            if (data.delay <= 0) {
                data.delay = data.originDelay;
                data.listener.apply(data.thisObject, data.params);
            }
        }
    }
})(egret || (egret = {}));
