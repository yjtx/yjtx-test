/**
 * Created by yjtx on 15-6-23.
 */

class DBBigFla extends EntryDisplayObjectContainer {
    public constructor() {
        super(["dbs"]);
    }

    protected initRoot():void {
        //this.stage.orientation = egret.OrientationMode.AUTO;
        egret.Profiler.getInstance().run();

        //眼睛有bug
        var container = new egret.DisplayObjectContainer();

        this.addChild(container);
        container.x = 50;

        egret.Ticker.getInstance().register(function (advancedTime):boolean {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            return true;
        }, this);

        var skeletonData = RES.getRes("bigfla_skeleton_json");
        var textureData = RES.getRes("bigfla_texture_json");
        var texture = RES.getRes("bigfla_texture_png");

        var factory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));

        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function() {
            var armature1 = factory.buildArmature("bosstz");
            var armatureDisplay1 = armature1.getDisplay();
            dragonBones.WorldClock.clock.add(armature1);
            container.addChild(armatureDisplay1);
            armatureDisplay1.x = 100;
            armatureDisplay1.y = 200;
            armature1.animation.gotoAndPlay("2");
            armature1.addEventListener(dragonBones.AnimationEvent.COMPLETE, function () {
                container.removeChild(armatureDisplay1);
            },this);


            var armature2 = factory.buildArmature("nuqixiaoguo");
            var armatureDisplay2 = armature2.getDisplay();
            dragonBones.WorldClock.clock.add(armature2);
            container.addChild(armatureDisplay2);
            armatureDisplay2.x = 300;
            armatureDisplay2.y = 200;
            armature2.animation.gotoAndPlay("1");
            armature2.addEventListener( dragonBones.AnimationEvent.COMPLETE, function () {
                container.removeChild(armatureDisplay2);
            },this);



        }, this);

    }

}

