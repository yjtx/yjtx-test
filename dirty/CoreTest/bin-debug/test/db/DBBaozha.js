/**
 * Created by yjtx on 15-6-23.
 */
var DBBaozha = (function (_super) {
    __extends(DBBaozha, _super);
    function DBBaozha() {
        _super.call(this, ["dbs"]);
    }
    var d = __define,c=DBBaozha,p=c.prototype;
    p.initRoot = function () {
        //眼睛有bug
        var container = new egret.DisplayObjectContainer();
        this.addChild(container);
        container.x = 50;
        var skeletonData = RES.getRes("baozhaxiaoguo_ske_json");
        var textureData = RES.getRes("baozhaxiaoguo_texture_json");
        var texture = RES.getRes("baozhaxiaoguo_texture_png");
        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        var armature = factory.buildArmature("baozha");
        var armatureDisplay = armature.getDisplay();
        dragonBones.WorldClock.clock.add(armature);
        container.addChild(armatureDisplay);
        armatureDisplay.x = 240;
        armatureDisplay.y = 300;
        armature.animation.gotoAndPlay("baozha", 0);
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            return true;
        }, this);
    };
    return DBBaozha;
}(EntryDisplayObjectContainer));
egret.registerClass(DBBaozha,'DBBaozha');
