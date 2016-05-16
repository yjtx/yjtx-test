/**
 * Created by yjtx on 15-7-10.
 */
class TickerAddAndRemove extends egret.DisplayObjectContainer {

    public constructor() {
        super();
        
        var id1 = egret.setTimeout(function f() {
            console.log("id1");
        }, this, 1000);
        
        var id2_1 = egret.setTimeout(function f() {
            console.log("id2_1");
        }, this, 2000);
        
        var id2_2 = egret.setTimeout(function f() {
            console.log("id2_2");
            
            egret.clearTimeout(id1);
            
            egret.clearTimeout(id2_1);
            egret.clearTimeout(id2_2);
            egret.clearTimeout(id2_3);
            
            egret.clearTimeout(id3);
        }, this, 2000);
        
        var id2_3 = egret.setTimeout(function f() {
            console.log("id2_3");
        }, this, 2000);
        
        var id3 = egret.setTimeout(function f() {
            console.log("id3");
        }, this, 2000);
        
    }
}