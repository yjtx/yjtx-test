/**
 * Created by yjtx on 15-6-23.
 */
var DBGirlRun = (function (_super) {
    __extends(DBGirlRun, _super);
    function DBGirlRun() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    var __egretProto__ = DBGirlRun.prototype;
    __egretProto__.init = function () {
        new LoadResources(this.testRole, this, "dbs", egret.MainContext.instance.rendererContext.texture_scale_factor);
    };
    __egretProto__.testRole = function () {
        //眼睛有bug
        var container = new egret.DisplayObjectContainer();
        this.addChild(container);
        container.x = 50;
        var skeletonData = RES.getRes("zhujue1_skeleton_json");
        var textureData = RES.getRes("zhujue1_texture_json");
        var texture = RES.getRes("zhujue1_texture_png");
        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        var armature = factory.buildArmature("zhujue1");
        var armatureDisplay = armature.getDisplay();
        dragonBones.WorldClock.clock.add(armature);
        container.addChild(armatureDisplay);
        armatureDisplay.x = 100;
        armatureDisplay.y = 200;
        armature.animation.gotoAndPlay("yidong");
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            return true;
        }, this);
    };
    return DBGirlRun;
})(egret.DisplayObjectContainer);
DBGirlRun.prototype.__class__ = "DBGirlRun";
