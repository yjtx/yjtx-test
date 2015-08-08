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
        this._a = value;
    }

    get a():number {
        return this._a;
    }

    getB(v1, v2, v3):void {

    }
}

class A2 extends A1 {

}
class A3 extends A2 {
    //set a(value:number) {
    //
    //}
    //get a():number {
    //    return 3;
    //}
}
class A4 extends A3 {

}
class A5 extends A4 {

    set a(value:number) {
        //super.a = value;
        egret.superSetter(this, "a", value);
    }

    get a():number {
        //return super.a;
        return egret.superGetter(this, "a");
    }

    getB(v1, v2, v3):void {
        return super.getB(v1, v2, v3);
    }
}