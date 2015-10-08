//declare module components{
//    export class ListGroup extends eui.Group{
//
//    }
//}

class ButtonInGroupClick extends eui.Group {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        //new LoadResources(, this, this.stage, ["resource/test/ButtonOK.exml"]);

        this.testUrl();
    }

    private testUrl():void {

        // 第一个Group容器
        var group: eui.Group = new eui.Group();
        group.percentWidth = 100;
        group.percentHeight = 100;
        this.addChild(group);

        // 第二个Group容器
        var groupChild: eui.Group = new eui.Group();
        groupChild.percentWidth = 100;
        groupChild.height = 200;
        groupChild.verticalCenter = 0;
        group.addChild(groupChild);

        var button:eui.Button = new eui.Button();
        button.skinName = "resource/skins/green/ButtonSkin.exml";
        button.left = 50;
        button.verticalCenter = 70;
        button.touchEnabled = true;
        button.touchChildren = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onReplayButtonClick,this);
        groupChild.addChild(button);
    }


    public onReplayButtonClick(event:egret.TouchEvent):void{
        // TOUCH事件无法触发
        egret.log(event.type);
    }
}
