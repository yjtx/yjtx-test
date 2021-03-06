/**
 * Created by yjtx on 15-6-23.
 */
var DBNormal = (function (_super) {
    __extends(DBNormal, _super);
    function DBNormal() {
        _super.call(this, ["dbs"]);
    }
    var __egretProto__ = DBNormal.prototype;
    __egretProto__.initRoot = function () {
        var container = new egret.DisplayObjectContainer();
        this.addChild(container);
        container.x = 50;
        var skeletonData = RES.getRes("skeleton_json");
        var textureData = RES.getRes("texture_json");
        var texture = RES.getRes("texture_png");
        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        var armature = factory.buildArmature("Dragon");
        var armatureDisplay = armature.getDisplay();
        dragonBones.WorldClock.clock.add(armature);
        container.addChild(armatureDisplay);
        armatureDisplay.x = 200;
        armatureDisplay.y = 450;
        armatureDisplay.scaleX = armatureDisplay.scaleY = 0.5;
        armature.animation.gotoAndPlay("walk");
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            return true;
        }, this);
    };
    return DBNormal;
})(EntryDisplayObjectContainer);
DBNormal.prototype.__class__ = "DBNormal";
