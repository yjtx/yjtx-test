/**
 * Created by yjtx on 15-7-17.
 */
class FunctionTransmit extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        var trans:TestFunctionTransmit1 = new TestFunctionTransmit1();
        trans.callback = this.test;

        trans.run();

        var trans:TestFunctionTransmit1 = new TestFunctionTransmit1();
        trans.callback = this.test.bind(this);

        trans.run();
    }

    private test(a:number):void {
        egret.log(a);

        console.dir(this);
    }
}

class TestFunctionTransmit1 {
    callback:Function;

    run():void {
        var self = this;
        egret.setTimeout(function () {
            self.callback(111);
        }, this, 3000);
    }
}
