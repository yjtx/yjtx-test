/**
 * Created by yjtx on 15-11-12.
 */
class FunctionDivSetterAndGetter extends EntryEuiDocument {
    constructor() {
        super(["preload"]);

    }

    protected initRoot():void {

        this.addChild(new Seat());
    }
}


class Seat extends eui.Component {
    constructor() {
        super();

        this.init();
    }

    protected init():void {
        this.skinName = components.SeatSkin;
    }

    createChildren():void {
        super.createChildren();

    }
}

class UserInfoView extends eui.Component {
    private imgMaster:eui.Image;

    constructor() {
        super();
    }

    get isMaster():boolean {
        console.log("ssssss");
        return true;//this.imgMaster.visible;
    }

    set isMaster(value:boolean) {
        this.imgMaster.visible = value;
    }
}