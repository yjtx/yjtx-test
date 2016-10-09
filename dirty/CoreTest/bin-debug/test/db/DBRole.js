/**
 * Created by yjtx on 15-6-23.
 */
var DBRole = (function (_super) {
    __extends(DBRole, _super);
    function DBRole() {
        _super.call(this, ["dbs"]);
    }
    var d = __define,c=DBRole,p=c.prototype;
    p.initRoot = function () {
        //眼睛有bug
        var container = new egret.DisplayObjectContainer();
        this.addChild(container);
        container.x = 50;
        var skeletonData = RES.getRes("role_1_s_json");
        var textureData = RES.getRes("role_1_d_json");
        var texture = RES.getRes("role_1_png");
        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        var armature = factory.buildArmature("role_1");
        var armatureDisplay = armature.getDisplay();
        dragonBones.WorldClock.clock.add(armature);
        container.addChild(armatureDisplay);
        armatureDisplay.x = 100;
        armatureDisplay.y = 100;
        armature.getSlot("eyelidL").display = new egret.Bitmap(RES.getRes("role_1_eyelid_png"));
        armature.getSlot("eyelidR").display = new egret.Bitmap(RES.getRes("role_1_eyelid_png"));
        armature.animation.gotoAndPlay("Blink");
        egret.Ticker.getInstance().register(function (advancedTime) {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            return true;
        }, this);
    };
    return DBRole;
}(EntryDisplayObjectContainer));
egret.registerClass(DBRole,'DBRole');
