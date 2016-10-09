/**
 * Created by yjtx on 15-11-12.
 */
class ScrollerExmlIn extends EntryEuiDocument {
    constructor() {
        super([""]);

    }

    protected initRoot():void {

        var exml =
	         `
<e:Group class="components.ListGroup" xmlns:e="http://ns.egret.com/eui">
    <e:Scroller id="scroller" left="1" top="1" width="300" height="100">
        <e:List id="list">
            <e:itemRendererSkinName>
                <e:Skin states="up,down,disabled" height="64">
                    <e:Image width="100%" height="100%" scale9Grid="1,3,8,8" alpha.disabled="0.5"
                        source="button_up_png" source.down="button_down_png"/>
                    <e:Label size="24" fontFamily="Tahoma" text="{data.label}"
                             textColor="0x555555" textColor.down="0x000000" left="32"
                             verticalCenter="0"/>
                </e:Skin>
            </e:itemRendererSkinName>
            <e:ArrayCollection>
                <e:Array>
                    <e:Object label="项目1"/>
                    <e:Object label="项目2"/>
                    <e:Object label="项目3"/>
                    <e:Object label="项目4"/>
                    <e:Object label="项目5"/>
                    <e:Object label="项目6"/>
                    <e:Object label="项目7"/>
                    <e:Object label="项目8"/>
                    <e:Object label="项目9"/>
                    <e:Object label="项目10"/>
                </e:Array>
            </e:ArrayCollection>
        </e:List>
    </e:Scroller>
</e:Group>
    `;
        var clazz = EXML.parse(exml);
        var ui = new clazz();
        this.addChild(ui);

        this.init(ui);
    }

    protected init(ui):void {
        ui.list.allowMultipleSelection = false;
        ui.list.useVirtualLayout = false;
        ui.list.touchEnabled = true;
        this.touchEnabled = true;

        ui.list.selectedIndex = 1;

        ui.list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);
        ui.list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onItemChoose, this);

        ui.list.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);

        ui.list.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFalseHandler, { useCapture: false }, false);

        ui.list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);

        ui.list.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTrueHandler, { useCapture: true }, true);
        ui.list.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onFalseHandler, { useCapture: false }, false);


        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);

        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);

        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrueHandler, { useCapture: true }, true);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFalseHandler, { useCapture: false }, false);

        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);

        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTrueHandler, { useCapture: true }, true);
        ui.scroller.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onFalseHandler, { useCapture: false }, false);


        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);

        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);

        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFalseHandler, { useCapture: false }, false);

        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);

        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTrueHandler, { useCapture: true }, true);
        this.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onFalseHandler, { useCapture: false }, false);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onFalseHandler, { useCapture: false }, false);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onFalseHandler, { useCapture: false }, false);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onFalseHandler, { useCapture: false }, false);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onFalseHandler, { useCapture: false }, false);

        this.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onTrueHandler, { useCapture: true }, true);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_CANCEL, this.onFalseHandler, { useCapture: false }, false);
    }

    private onItemChoose(e:eui.ItemTapEvent):void {
        console.log(111);
    }

    private onTrueHandler(e:egret.TouchEvent):void {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " ======= " + e.type + " ======= useCapture true " + this["useCapture"]);
    }

    private onFalseHandler(e:egret.TouchEvent):void {
        egret.log(egret.getQualifiedClassName(e.currentTarget) + " =======  " + e.type + " ======= useCapture false " +  + this["useCapture"]);
    }
}
