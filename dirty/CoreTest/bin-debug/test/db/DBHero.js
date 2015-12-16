/**
 * Created by yjtx on 15-6-23.
 */
var DBHero = (function (_super) {
    __extends(DBHero, _super);
    function DBHero() {
        _super.call(this, ["dbs"]);
    }
    var d = __define,c=DBHero,p=c.prototype;
    p.initRoot = function () {
        var container = new egret.DisplayObjectContainer();
        this.addChild(container);
        container.x = 50;
        var skeletonData = RES.getRes("hero_530adf09_json");
        var textureData = RES.getRes("texture_ae654056_json");
        var texture = RES.getRes("texture_86c49911_png");
        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        var armature = factory.buildArmature("hero");
        var armatureDisplay = armature.getDisplay();
        dragonBones.WorldClock.clock.add(armature);
        container.addChild(armatureDisplay);
        armatureDisplay.x = 200;
        armatureDisplay.y = 450;
        armatureDisplay.scaleX = armatureDisplay.scaleY = 0.5;
        armature.animation.gotoAndPlay("ready");
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            return true;
        }, this);
    };
    return DBHero;
})(EntryDisplayObjectContainer);
egret.registerClass(DBHero,'DBHero');
