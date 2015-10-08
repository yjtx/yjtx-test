/**
 * Created by yjtx on 15-7-17.
 */
class FunctionSuper extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        var a = new A5();
        console.log(a.a);

        a.a = 4;
        console.log(a.a);
    }
}

class A1 {

    public _a:number = 1;
    set a(value:number) {
        console.log("set  a 1");
        this._a = value;
    }

    get a():number {
        console.log("get  a 1");
        return this._a;
    }

    getB(v1, v2, v3):void {

    }
}

class A2 extends A1 {

}
class A3 extends A2 {
    set a(value:number) {
        console.log("set  a 3");
        egret.superSetter(A3, this, "a", value);
    }

    get a():number {
        console.log("get  a 3");
        return egret.superGetter(A3, this, "a");
    }
}
class A4 extends A3 {

}
class A5 extends A4 {

    set a(value:number) {
        //super.a = value;
        console.log("set  a 5");
        egret.superSetter(A5, this, "a", value);
    }

    get a():number {
        console.log("get  a 5");
        return egret.superGetter(A5, this, "a");
    }

    getB(v1, v2, v3):void {
        return super.getB(v1, v2, v3);
    }
}