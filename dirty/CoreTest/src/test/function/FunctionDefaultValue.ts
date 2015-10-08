/**
 * Created by yjtx on 15-7-7.
 */

class FunctionDefaultValue extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        var tf = new TestFunction();
        tf.initNumber(10);
        console.log("number default values:");
        console.log(tf.toString());

        tf.initBoolean(true);
        console.log("boolean default values:");
        console.log(tf.toString());

        tf.initString("a");
        console.log("string default values:");
        console.log(tf.toString());
    }
}


class TestFunction {

    public a:any;
    public b:any;
    public c:any;

    constructor() {
    }

    initNumber(a:number, b?:number, c:number = 10):void {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    initBoolean(a:boolean, b?:boolean, c:boolean = true):void {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    initString(a:string, b?:string, c:string = "c"):void {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    toString():string {
        var str = "";
        str += ("a=" + this.a + "  ");
        str += ("b=" + this.b + "  ");
        str += ("c=" + this.c + "  ");
        return str;
    }
}