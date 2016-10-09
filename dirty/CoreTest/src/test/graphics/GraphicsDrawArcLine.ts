/**
 * Created by yjtx on 15-7-10.
 */
class GraphicsDrawArcLine extends EntryDisplayObjectContainer {

    public constructor() {
        super();
    }

    protected initRoot():void {
        var arr = [
            {x: 0, y: 0},
            {x: 370, y: 0},
            {x: 370, y: 30, r: 30, start: -90, end: 0, rs:false},
            {x: 400, y: 270},
            {x: 370, y: 270, r: 30, start: 0, end: 90, rs:false},
            {x: 0, y: 300},
            {x: 0, y: 0}
        ];

        var shape = new egret.Shape();
        this.addChild(shape);
        shape.x = 20;
        shape.y = 20;
        shape.graphics.beginFill(0x000000, 0.5);
        shape.graphics.lineStyle(2, 0xff0000, 1);
        shape.graphics.moveTo(0, 0);


        for (var i = 0; i < arr.length; i++) {
            var pos:{x:number, y:number, r?:number, start?:number, end?:number, rs?:boolean} = arr[i];
            if (pos.r) {
                console.log(pos);
                shape.graphics.drawArc(pos.x, pos.y, pos.r, pos.start * Math.PI / 180, pos.end * Math.PI / 180, pos.rs);
            } else {
                shape.graphics.lineTo(pos.x, pos.y);
            }
        }

        shape.graphics.endFill();
    }

}

