/**
 * Created by yjtx on 15-7-17.
 */
class FunctionRegExp1 extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {

        // var regx = /[a-z]{1,10}+/;

        alert("use");

    }

    argTest = ()=> {
        //var a:number = arguments[2];
        //console.log(a);
    }
}
