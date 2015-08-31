var egret;
(function (egret) {
    var web;
    (function (web) {
        /**
         * @private
         */
        var WebMotion = (function (_super) {
            __extends(WebMotion, _super);
            function WebMotion() {
                var _this = this;
                _super.apply(this, arguments);
                /**
                 * @private
                 */
                this.onChange = function (e) {
                    var event = new egret.MotionEvent(egret.Event.CHANGE);
                    var acceleration = {
                        x: e.acceleration.x,
                        y: e.acceleration.y,
                        z: e.acceleration.z
                    };
                    var accelerationIncludingGravity = {
                        x: e.accelerationIncludingGravity.x,
                        y: e.accelerationIncludingGravity.y,
                        z: e.accelerationIncludingGravity.z
                    };
                    var rotation = {
                        alpha: e.rotationRate.alpha,
                        beta: e.rotationRate.beta,
                        gamma: e.rotationRate.gamma
                    };
                    event.acceleration = acceleration;
                    event.accelerationIncludingGravity = accelerationIncludingGravity;
                    event.rotationRate = rotation;
                    _this.dispatchEvent(event);
                };
            }
            var __egretProto__ = WebMotion.prototype;
            /**
             * @private
             *
             */
            __egretProto__.start = function () {
                window.addEventListener("devicemotion", this.onChange);
            };
            /**
             * @private
             *
             */
            __egretProto__.stop = function () {
                window.removeEventListener("devicemotion", this.onChange);
            };
            return WebMotion;
        })(egret.EventDispatcher);
        web.WebMotion = WebMotion;
        WebMotion.prototype.__class__ = "egret.web.WebMotion";
        egret.registerClass(WebMotion,"egret.web.WebMotion",["egret.Motion"]);
        egret.Motion = egret.web.WebMotion;
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));
