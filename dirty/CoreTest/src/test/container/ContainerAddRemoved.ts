class ContainerAddRemoved extends EntryDisplayObjectContainer {
	public constructor() {

		super();
	}


    protected initRoot():void {
        for (var i:number = 0; i < 5; i++) {
            var text:egret.TextField = new egret.TextField();
            text.text = "ddd " + i;
            this.addChild(text);
            text.x = 100;
            text.y = 100 + i * 60;
        }


        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapHandler, this);

        var child:egret.TextField = <egret.TextField>this.getChildAt(2);
        child.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemovedFromStage,this);
        child.addEventListener(egret.Event.REMOVED,this.onRemoved,this);
        this.addEventListener(egret.Event.REMOVED,this.onRemoved,this);
    }
	
    private onTapHandler():void {
		console.log("numChildren: " + this.numChildren);

        this.stage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTapHandler, this);

        var child:egret.TextField = <egret.TextField>this.getChildAt(2);
        this.removeChild(child);
    }

    private onRemovedFromStage(e:egret.Event):void {
        console.log("onRemovedFromStage: ");
        console.log(e.target);
    }

    private onRemoved(e:egret.Event):void {
        console.log("onRemoved: ");
        console.log(e.target);
        console.log(e.currentTarget);

		console.log("numChildren: " + this.numChildren);

		egret.callLater(function(){
		    console.log("numChildren: " + this.numChildren);
		}, this);
    }
}