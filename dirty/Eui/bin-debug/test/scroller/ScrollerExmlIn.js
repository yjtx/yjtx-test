/**
 * Created by yjtx on 15-11-12.
 */
var ScrollerExmlIn = (function (_super) {
    __extends(ScrollerExmlIn, _super);
    function ScrollerExmlIn() {
        _super.call(this, ["preload"]);
    }
    var d = __define,c=ScrollerExmlIn;p=c.prototype;
    p.initRoot = function () {
        var exml = "\n<e:Group class=\"components.ListGroup\" xmlns:e=\"http://ns.egret.com/eui\">\n    <e:Scroller left=\"1\" top=\"1\" width=\"300\" height=\"100\">\n        <e:List id=\"list\">\n            <e:itemRendererSkinName>\n                <e:Skin states=\"up,down,disabled\" height=\"64\">\n                    <e:Label size=\"24\" fontFamily=\"Tahoma\" text=\"{data.label}\"\n                             textColor=\"0x555555\" textColor.down=\"0x000000\" left=\"32\"\n                             verticalCenter=\"0\"/>\n                </e:Skin>\n            </e:itemRendererSkinName>\n            <e:ArrayCollection>\n                <e:Array>\n                    <e:Object label=\"\u9879\u76EE1\"/>\n                    <e:Object label=\"\u9879\u76EE2\"/>\n                    <e:Object label=\"\u9879\u76EE3\"/>\n                    <e:Object label=\"\u9879\u76EE4\"/>\n                    <e:Object label=\"\u9879\u76EE5\"/>\n                    <e:Object label=\"\u9879\u76EE6\"/>\n                    <e:Object label=\"\u9879\u76EE7\"/>\n                    <e:Object label=\"\u9879\u76EE8\"/>\n                    <e:Object label=\"\u9879\u76EE9\"/>\n                    <e:Object label=\"\u9879\u76EE10\"/>\n                </e:Array>\n            </e:ArrayCollection>\n        </e:List>\n    </e:Scroller>\n</e:Group>\n    ";
        var clazz = EXML.parse(exml);
        var ui = new clazz();
        this.addChild(ui);
        this.init(ui);
    };
    p.init = function (ui) {
        ui.list.touchEnabled = true;
        this.touchEnabled = true;
        ui.list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);
    };
    p.onTrueHandler = function (e) {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " ======= " + e.type + " ======= useCapture true " + this["useCapture"]);
    };
    p.onFalseHandler = function (e) {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " =======  " + e.type + " ======= useCapture false " + +this["useCapture"]);
    };
    return ScrollerExmlIn;
})(EntryEuiDocument);
egret.registerClass(ScrollerExmlIn,"ScrollerExmlIn");
