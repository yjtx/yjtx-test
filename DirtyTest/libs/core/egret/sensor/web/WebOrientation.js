var egret;
(function (egret) {
    var web;
    (function (web) {
        /**
         * @private
         */
        var WebOrientation = (function (_super) {
            __extends(WebOrientation, _super);
            function WebOrientation() {
                var _this = this;
                _super.apply(this, arguments);
                /**
                 * @private
                 */
                this.onChange = function (e) {
                    var event = new egret.OrientationEvent(egret.Event.CHANGE);
                    event.beta = e.beta;
                    event.gamma = e.gamma;
                    event.alpha = e.alpha;
                    _this.dispatchEvent(event);
                };
            }
            var __egretProto__ = WebOrientation.prototype;
            /**
             * @private
             *
             */
            __egretProto__.start = function () {
                window.addEventListener("deviceorientation", this.onChange);
            };
            /**
             * @private
             *
             */
            __egretProto__.stop = function () {
                window.removeEventListener("deviceorientation", this.onChange);
            };
            return WebOrientation;
        })(egret.EventDispatcher);
        web.WebOrientation = WebOrientation;
        WebOrientation.prototype.__class__ = "egret.web.WebOrientation";
        egret.registerClass(WebOrientation,"egret.web.WebOrientation",["egret.Orientation"]);
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));
egret.Orientation = egret.web.WebOrientation;
