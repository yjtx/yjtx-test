/**
 * Created by yjtx on 15-7-17.
 */
class FunctionSuperClasses extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        var b:B = new B();
    }
}


class A {
    a:number = 1;
    public constructor() {
        this.init();
    }

    protected init():void {

    }
}

/**
 *
 * @author
 *
 */
class B extends A {
    private c:C;

    b:number = 2;
    public constructor() {
        super();
        this.c = new C();
    }

    protected init():void {
        //this.c.test();
    }
}


/**
 *
 * @author
 *
 */
class C {
    public constructor() {
    }

    public test():void {
        console.log(">>>>");
    }
}