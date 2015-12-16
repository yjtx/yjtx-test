//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}
var ButtonInGroupClick = (function (_super) {
    __extends(ButtonInGroupClick, _super);
    function ButtonInGroupClick() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var d = __define,c=ButtonInGroupClick;p=c.prototype;
    p.init = function () {
        //new LoadResources(, this, this.stage, ["resource/test/ButtonOK.exml"]);
        this.testUrl();
    };
    p.testUrl = function () {
        // 第一个Group容器
        var group = new eui.Group();
        group.percentWidth = 100;
        group.percentHeight = 100;
        this.addChild(group);
        // 第二个Group容器
        var groupChild = new eui.Group();
        groupChild.percentWidth = 100;
        groupChild.height = 200;
        groupChild.verticalCenter = 0;
        group.addChild(groupChild);
        var button = new eui.Button();
        button.skinName = "resource/skins/green/ButtonSkin.exml";
        button.left = 50;
        button.verticalCenter = 70;
        button.touchEnabled = true;
        button.touchChildren = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplayButtonClick, this);
        groupChild.addChild(button);
    };
    p.onReplayButtonClick = function (event) {
        // TOUCH事件无法触发
        egret.log(event.type);
    };
    return ButtonInGroupClick;
})(eui.Group);
egret.registerClass(ButtonInGroupClick,"ButtonInGroupClick");
