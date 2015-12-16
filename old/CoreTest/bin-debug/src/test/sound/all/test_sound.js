/**
 * Created by huanghaiying on 15/3/25.
 */
var input;
(function (input) {
    function testSoundFuncs() {
        var c = new egret.DisplayObjectContainer();
        var s = RES.getRes("wf_mp3");
        s.play(!!0, 0);
        var text1 = new egret.TextField();
        text1.text = "play";
        text1.size = 60;
        text1.x = 380;
        text1.y = 0;
        c.addChild(text1);
        text1.touchEnabled = true;
        text1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            s.stop();
            s.play(!!0, 0);
        }, this);
        var text2 = new egret.TextField();
        text2.text = "stop";
        text2.size = 60;
        text2.x = 380;
        text2.y = 100;
        text2.touchEnabled = true;
        text2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            s.stop();
        }, this);
        c.addChild(text2);
        var text3 = new egret.TextField();
        text3.text = "pause";
        text3.size = 60;
        text3.x = 380;
        text3.y = 200;
        text3.touchEnabled = true;
        text3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            s.stop();
        }, this);
        c.addChild(text3);
        var text4 = new egret.TextField();
        text4.text = "resume";
        text4.size = 60;
        text4.x = 380;
        text4.y = 300;
        text4.touchEnabled = true;
        text4.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            s.play(!!0, 0);
        }, this);
        c.addChild(text4);
        return c;
    }
    input.testSoundFuncs = testSoundFuncs;
})(input || (input = {}));
