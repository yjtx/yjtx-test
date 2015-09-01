var eui;
(function (eui) {
    /**
     * @private
     */
    var ScrollerThrowEvent = (function (_super) {
        __extends(ScrollerThrowEvent, _super);
        /**
         * 动画信息，可调节或修改
         */
        //public tween;
        function ScrollerThrowEvent(type, bubbles, cancelable, currentPos, toPos) {
            _super.call(this, type, bubbles, cancelable);
            currentPos = +currentPos;
            toPos = +toPos;
            this.currentPos = currentPos;
            this.toPos = toPos;
        }
        var __egretProto__ = ScrollerThrowEvent.prototype;
        ScrollerThrowEvent.THROW = "throw";
        return ScrollerThrowEvent;
    })(egret.Event);
    eui.ScrollerThrowEvent = ScrollerThrowEvent;
    ScrollerThrowEvent.prototype.__class__ = "eui.ScrollerThrowEvent";
    egret.registerClass(ScrollerThrowEvent,"eui.ScrollerThrowEvent");
})(eui || (eui = {}));
