/**
 * Created by yjtx on 15-6-23.
 */

class DBRole extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }

    private init():void {
        new LoadResources(this.testRole, this, "dbs", egret.MainContext.instance.rendererContext.texture_scale_factor);
    }

    private testRole():void {
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
        armature.animation.gotoAndPlay("Blink");

        armature.getSlot("eyelidL").display.texture   = RES.getRes("role_1_eyelid_png");
        armature.getSlot("eyelidR").display.texture   = RES.getRes("role_1_eyelid_png");

        egret.Ticker.getInstance().register(function (advancedTime):boolean {
            dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
            return true;
        }, this);
    }

}

