//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var dragonBones;
(function (dragonBones) {
    /**
     *@class dragonBones.DataParser
     * @classdesc
     * 数据解析
     *
     * @example
       <pre>
         //获取动画数据
         var skeletonData = RES.getRes("skeleton");
         //获取纹理集数据
         var textureData = RES.getRes("textureConfig");
         //获取纹理集图片
         var texture = RES.getRes("texture");
      
         //创建一个工厂，用来创建Armature
         var factory:dragonBones.EgretFactory = new dragonBones.EgretFactory();
         //把动画数据添加到工厂里
         factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
         //把纹理集数据和图片添加到工厂里
         factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
         //获取Armature的名字，dragonBones4.0的数据可以包含多个骨架，这里取第一个Armature
         var armatureName:string = skeletonData.armature[0].name;
         //从工厂里创建出Armature
         var armature:dragonBones.Armature = factory.buildArmature(armatureName);
         //获取装载Armature的容器
         var armatureDisplay = armature.display;
         //把它添加到舞台上
         this.addChild(armatureDisplay);
         //取得这个Armature动画列表中的第一个动画的名字
         var curAnimationName = armature.animation.animationList[0];
         //播放这个动画，gotoAndPlay参数说明,具体详见Animation类
         //第一个参数 animationName {string} 指定播放动画的名称.
         //第二个参数 fadeInTime {number} 动画淡入时间 (>= 0), 默认值：-1 意味着使用动画数据中的淡入时间.
         //第三个参数 duration {number} 动画播放时间。默认值：-1 意味着使用动画数据中的播放时间.
         //第四个参数 layTimes {number} 动画播放次数(0:循环播放, >=1:播放次数, NaN:使用动画数据中的播放时间), 默认值：NaN
         armature.animation.gotoAndPlay(curAnimationName,0.3,-1,0);
      
         //把Armature添加到心跳时钟里
         dragonBones.WorldClock.clock.add(armature);
         //心跳时钟开启
         egret.Ticker.getInstance().register(function (advancedTime) {
             dragonBones.WorldClock.clock.advanceTime(advancedTime / 1000);
         }, this);
       </pre>
     */
    var DataParser = (function () {
        function DataParser() {
        }
        var __egretProto__ = DataParser.prototype;
        /**
         *解析纹理集数据
         * @param rawData纹理集数据xml或者json
         * @param scale纹理资源的缩放，默认为1，不缩放
         * @returns {any}返回纹理集数据，存放TexutrueData的字典类型
         */
        DataParser.parseTextureAtlasData = function (rawData, scale) {
            if (scale === void 0) { scale = 1; }
            var textureAtlasData = {};
            var subTextureFrame;
            var subTextureList = rawData[dragonBones.ConstValues.SUB_TEXTURE];
            for (var key in subTextureList) {
                var subTextureObject = subTextureList[key];
                var subTextureName = subTextureObject[dragonBones.ConstValues.A_NAME];
                var subTextureRegion = new dragonBones.Rectangle();
                subTextureRegion.x = DataParser.getNumber(subTextureObject, dragonBones.ConstValues.A_X, 0) / scale;
                subTextureRegion.y = DataParser.getNumber(subTextureObject, dragonBones.ConstValues.A_Y, 0) / scale;
                subTextureRegion.width = DataParser.getNumber(subTextureObject, dragonBones.ConstValues.A_WIDTH, 0) / scale;
                subTextureRegion.height = DataParser.getNumber(subTextureObject, dragonBones.ConstValues.A_HEIGHT, 0) / scale;
                var rotated = subTextureObject[dragonBones.ConstValues.A_ROTATED] == "true";
                var frameWidth = DataParser.getNumber(subTextureObject, dragonBones.ConstValues.A_FRAME_WIDTH, 0) / scale;
                var frameHeight = DataParser.getNumber(subTextureObject, dragonBones.ConstValues.A_FRAME_HEIGHT, 0) / scale;
                if (frameWidth > 0 && frameHeight > 0) {
                    subTextureFrame = new dragonBones.Rectangle();
                    subTextureFrame.x = DataParser.getNumber(subTextureObject, dragonBones.ConstValues.A_FRAME_X, 0) / scale;
                    subTextureFrame.y = DataParser.getNumber(subTextureObject, dragonBones.ConstValues.A_FRAME_Y, 0) / scale;
                    subTextureFrame.width = frameWidth;
                    subTextureFrame.height = frameHeight;
                }
                else {
                    subTextureFrame = null;
                }
                textureAtlasData[subTextureName] = new dragonBones.TextureData(subTextureRegion, subTextureFrame, rotated);
            }
            return textureAtlasData;
        };
        /**
         * 解析DragonBones的数据，xml或者json，该数据包含了骨骼，皮肤，动画的数据
         * @param rawDataToParse DragonBones的数据，xml或者json格式
         * @returns {DragonBonesData} 返回DragonBones引擎使用的数据格式
         */
        DataParser.parseDragonBonesData = function (rawDataToParse) {
            if (!rawDataToParse) {
                throw new Error();
            }
            var version = rawDataToParse[dragonBones.ConstValues.A_VERSION];
            version = version.toString();
            if (version.toString() != dragonBones.DragonBones.DATA_VERSION && version.toString() != dragonBones.DragonBones.PARENT_COORDINATE_DATA_VERSION && version.toString() != "2.3") {
                throw new Error(egret.getString(4003));
            }
            else if (version.toString() == dragonBones.DragonBones.PARENT_COORDINATE_DATA_VERSION || version.toString() == "2.3") {
                return dragonBones.Data3Parser.parseDragonBonesData(rawDataToParse);
            }
            var frameRate = DataParser.getNumber(rawDataToParse, dragonBones.ConstValues.A_FRAME_RATE, 0) || 0;
            var outputDragonBonesData = new dragonBones.DragonBonesData();
            outputDragonBonesData.name = rawDataToParse[dragonBones.ConstValues.A_NAME];
            outputDragonBonesData.isGlobal = rawDataToParse[dragonBones.ConstValues.A_IS_GLOBAL] == "0" ? false : true;
            DataParser.tempDragonBonesData = outputDragonBonesData;
            var armatureList = rawDataToParse[dragonBones.ConstValues.ARMATURE];
            for (var key in armatureList) {
                var armatureObject = rawDataToParse[dragonBones.ConstValues.ARMATURE][key];
                outputDragonBonesData.addArmatureData(DataParser.parseArmatureData(armatureObject, frameRate));
            }
            DataParser.tempDragonBonesData = null;
            return outputDragonBonesData;
        };
        DataParser.parseArmatureData = function (armatureDataToParse, frameRate) {
            var outputArmatureData = new dragonBones.ArmatureData();
            outputArmatureData.name = armatureDataToParse[dragonBones.ConstValues.A_NAME];
            var boneList = armatureDataToParse[dragonBones.ConstValues.BONE];
            for (var key in boneList) {
                var boneObject = boneList[key];
                outputArmatureData.addBoneData(DataParser.parseBoneData(boneObject));
            }
            var slotList = armatureDataToParse[dragonBones.ConstValues.SLOT];
            for (var key in slotList) {
                var slotObject = slotList[key];
                outputArmatureData.addSlotData(DataParser.parseSlotData(slotObject));
            }
            var skinList = armatureDataToParse[dragonBones.ConstValues.SKIN];
            for (var key in skinList) {
                var skinObject = skinList[key];
                outputArmatureData.addSkinData(DataParser.parseSkinData(skinObject));
            }
            if (DataParser.tempDragonBonesData.isGlobal) {
                dragonBones.DBDataUtil.transformArmatureData(outputArmatureData);
            }
            outputArmatureData.sortBoneDataList();
            var animationList = armatureDataToParse[dragonBones.ConstValues.ANIMATION];
            for (var key in animationList) {
                var animationObject = animationList[key];
                var animationData = DataParser.parseAnimationData(animationObject, frameRate);
                dragonBones.DBDataUtil.addHideTimeline(animationData, outputArmatureData);
                dragonBones.DBDataUtil.transformAnimationData(animationData, outputArmatureData, DataParser.tempDragonBonesData.isGlobal);
                outputArmatureData.addAnimationData(animationData);
            }
            return outputArmatureData;
        };
        //把bone的初始transform解析并返回
        DataParser.parseBoneData = function (boneObject) {
            var boneData = new dragonBones.BoneData();
            boneData.name = boneObject[dragonBones.ConstValues.A_NAME];
            boneData.parent = boneObject[dragonBones.ConstValues.A_PARENT];
            boneData.length = Number(boneObject[dragonBones.ConstValues.A_LENGTH]) || 0;
            boneData.inheritRotation = DataParser.getBoolean(boneObject, dragonBones.ConstValues.A_INHERIT_ROTATION, true);
            boneData.inheritScale = DataParser.getBoolean(boneObject, dragonBones.ConstValues.A_INHERIT_SCALE, true);
            DataParser.parseTransform(boneObject[dragonBones.ConstValues.TRANSFORM], boneData.transform);
            if (DataParser.tempDragonBonesData.isGlobal) {
                boneData.global.copy(boneData.transform);
            }
            return boneData;
        };
        DataParser.parseSkinData = function (skinObject) {
            var skinData = new dragonBones.SkinData();
            skinData.name = skinObject[dragonBones.ConstValues.A_NAME];
            var slotList = skinObject[dragonBones.ConstValues.SLOT];
            for (var key in slotList) {
                var slotObject = slotList[key];
                skinData.addSlotData(DataParser.parseSlotDisplayData(slotObject));
            }
            return skinData;
        };
        DataParser.parseSlotData = function (slotObject) {
            var slotData = new dragonBones.SlotData();
            slotData.name = slotObject[dragonBones.ConstValues.A_NAME];
            slotData.parent = slotObject[dragonBones.ConstValues.A_PARENT];
            slotData.zOrder = DataParser.getNumber(slotObject, dragonBones.ConstValues.A_Z_ORDER, 0) || 0;
            slotData.displayIndex = DataParser.getNumber(slotObject, dragonBones.ConstValues.A_DISPLAY_INDEX, 0);
            slotData.blendMode = slotObject[dragonBones.ConstValues.A_BLENDMODE];
            return slotData;
        };
        DataParser.parseSlotDisplayData = function (slotObject) {
            var slotData = new dragonBones.SlotData();
            slotData.name = slotObject[dragonBones.ConstValues.A_NAME];
            slotData.parent = slotObject[dragonBones.ConstValues.A_PARENT];
            slotData.zOrder = DataParser.getNumber(slotObject, dragonBones.ConstValues.A_Z_ORDER, 0) || 0;
            var displayList = slotObject[dragonBones.ConstValues.DISPLAY];
            for (var key in displayList) {
                var displayObject = displayList[key];
                slotData.addDisplayData(DataParser.parseDisplayData(displayObject));
            }
            return slotData;
        };
        DataParser.parseDisplayData = function (displayObject) {
            var displayData = new dragonBones.DisplayData();
            displayData.name = displayObject[dragonBones.ConstValues.A_NAME];
            displayData.type = displayObject[dragonBones.ConstValues.A_TYPE];
            DataParser.parseTransform(displayObject[dragonBones.ConstValues.TRANSFORM], displayData.transform, displayData.pivot);
            displayData.pivot.x = NaN;
            displayData.pivot.y = NaN;
            if (DataParser.tempDragonBonesData != null) {
                DataParser.tempDragonBonesData.addDisplayData(displayData);
            }
            return displayData;
        };
        /** @private */
        DataParser.parseAnimationData = function (animationObject, frameRate) {
            var animationData = new dragonBones.AnimationData();
            animationData.name = animationObject[dragonBones.ConstValues.A_NAME];
            animationData.frameRate = frameRate;
            animationData.duration = Math.round((DataParser.getNumber(animationObject, dragonBones.ConstValues.A_DURATION, 1) || 1) * 1000 / frameRate);
            animationData.playTimes = DataParser.getNumber(animationObject, dragonBones.ConstValues.A_PLAY_TIMES, 1);
            animationData.playTimes = animationData.playTimes != NaN ? animationData.playTimes : 1;
            animationData.fadeTime = DataParser.getNumber(animationObject, dragonBones.ConstValues.A_FADE_IN_TIME, 0) || 0;
            animationData.scale = DataParser.getNumber(animationObject, dragonBones.ConstValues.A_SCALE, 1) || 0;
            //use frame tweenEase, NaN
            //overwrite frame tweenEase, [-1, 0):ease in, 0:line easing, (0, 1]:ease out, (1, 2]:ease in out
            animationData.tweenEasing = DataParser.getNumber(animationObject, dragonBones.ConstValues.A_TWEEN_EASING, NaN);
            animationData.autoTween = DataParser.getBoolean(animationObject, dragonBones.ConstValues.A_AUTO_TWEEN, true);
            var frameObjectList = animationObject[dragonBones.ConstValues.FRAME];
            var i = 0;
            var len = 0;
            if (frameObjectList) {
                for (i = 0, len = frameObjectList.length; i < len; i++) {
                    var frameObject = frameObjectList[i];
                    var frame = DataParser.parseTransformFrame(frameObject, frameRate);
                    animationData.addFrame(frame);
                }
            }
            DataParser.parseTimeline(animationObject, animationData);
            var lastFrameDuration = animationData.duration;
            var timelineObjectList = animationObject[dragonBones.ConstValues.BONE];
            if (timelineObjectList) {
                for (i = 0, len = timelineObjectList.length; i < len; i++) {
                    var timelineObject = timelineObjectList[i];
                    if (timelineObject) {
                        var timeline = DataParser.parseTransformTimeline(timelineObject, animationData.duration, frameRate);
                        if (timeline.frameList.length > 0) {
                            lastFrameDuration = Math.min(lastFrameDuration, timeline.frameList[timeline.frameList.length - 1].duration);
                        }
                        animationData.addTimeline(timeline);
                    }
                }
            }
            var slotTimelineObjectList = animationObject[dragonBones.ConstValues.SLOT];
            if (slotTimelineObjectList) {
                for (i = 0, len = slotTimelineObjectList.length; i < len; i++) {
                    var slotTimelineObject = slotTimelineObjectList[i];
                    if (slotTimelineObject) {
                        var slotTimeline = DataParser.parseSlotTimeline(slotTimelineObject, animationData.duration, frameRate);
                        if (slotTimeline.frameList.length > 0) {
                            lastFrameDuration = Math.min(lastFrameDuration, slotTimeline.frameList[slotTimeline.frameList.length - 1].duration);
                            animationData.addSlotTimeline(slotTimeline);
                        }
                    }
                }
            }
            if (animationData.frameList.length > 0) {
                lastFrameDuration = Math.min(lastFrameDuration, animationData.frameList[animationData.frameList.length - 1].duration);
            }
            //取得timeline中最小的lastFrameDuration并保存
            animationData.lastFrameDuration = lastFrameDuration;
            return animationData;
        };
        DataParser.parseTransformTimeline = function (timelineObject, duration, frameRate) {
            var outputTimeline = new dragonBones.TransformTimeline();
            outputTimeline.name = timelineObject[dragonBones.ConstValues.A_NAME];
            outputTimeline.scale = DataParser.getNumber(timelineObject, dragonBones.ConstValues.A_SCALE, 1) || 0;
            outputTimeline.offset = DataParser.getNumber(timelineObject, dragonBones.ConstValues.A_OFFSET, 0) || 0;
            outputTimeline.originPivot.x = DataParser.getNumber(timelineObject, dragonBones.ConstValues.A_PIVOT_X, 0) || 0;
            outputTimeline.originPivot.y = DataParser.getNumber(timelineObject, dragonBones.ConstValues.A_PIVOT_Y, 0) || 0;
            outputTimeline.duration = duration;
            var frameList = timelineObject[dragonBones.ConstValues.FRAME];
            for (var key in frameList) {
                var frameObject = frameList[key];
                var frame = DataParser.parseTransformFrame(frameObject, frameRate);
                outputTimeline.addFrame(frame);
            }
            DataParser.parseTimeline(timelineObject, outputTimeline);
            return outputTimeline;
        };
        DataParser.parseSlotTimeline = function (timelineObject, duration, frameRate) {
            var outputTimeline = new dragonBones.SlotTimeline();
            outputTimeline.name = timelineObject[dragonBones.ConstValues.A_NAME];
            outputTimeline.scale = DataParser.getNumber(timelineObject, dragonBones.ConstValues.A_SCALE, 1) || 0;
            outputTimeline.offset = DataParser.getNumber(timelineObject, dragonBones.ConstValues.A_OFFSET, 0) || 0;
            outputTimeline.duration = duration;
            var frameList = timelineObject[dragonBones.ConstValues.FRAME];
            for (var key in frameList) {
                var frameObject = frameList[key];
                var frame = DataParser.parseSlotFrame(frameObject, frameRate);
                outputTimeline.addFrame(frame);
            }
            DataParser.parseTimeline(timelineObject, outputTimeline);
            return outputTimeline;
        };
        DataParser.parseTransformFrame = function (frameObject, frameRate) {
            var outputFrame = new dragonBones.TransformFrame();
            DataParser.parseFrame(frameObject, outputFrame, frameRate);
            outputFrame.visible = !DataParser.getBoolean(frameObject, dragonBones.ConstValues.A_HIDE, false);
            //NaN:no tween, 10:auto tween, [-1, 0):ease in, 0:line easing, (0, 1]:ease out, (1, 2]:ease in out
            outputFrame.tweenEasing = DataParser.getNumber(frameObject, dragonBones.ConstValues.A_TWEEN_EASING, 10);
            outputFrame.tweenRotate = Math.floor(DataParser.getNumber(frameObject, dragonBones.ConstValues.A_TWEEN_ROTATE, 0) || 0);
            outputFrame.tweenScale = DataParser.getBoolean(frameObject, dragonBones.ConstValues.A_TWEEN_SCALE, true);
            outputFrame.displayIndex = Math.floor(DataParser.getNumber(frameObject, dragonBones.ConstValues.A_DISPLAY_INDEX, 0) || 0);
            DataParser.parseTransform(frameObject[dragonBones.ConstValues.TRANSFORM], outputFrame.transform, outputFrame.pivot);
            if (DataParser.tempDragonBonesData.isGlobal) {
                outputFrame.global.copy(outputFrame.transform);
            }
            outputFrame.scaleOffset.x = DataParser.getNumber(frameObject, dragonBones.ConstValues.A_SCALE_X_OFFSET, 0) || 0;
            outputFrame.scaleOffset.y = DataParser.getNumber(frameObject, dragonBones.ConstValues.A_SCALE_Y_OFFSET, 0) || 0;
            return outputFrame;
        };
        DataParser.parseSlotFrame = function (frameObject, frameRate) {
            var outputFrame = new dragonBones.SlotFrame();
            DataParser.parseFrame(frameObject, outputFrame, frameRate);
            outputFrame.visible = !DataParser.getBoolean(frameObject, dragonBones.ConstValues.A_HIDE, false);
            //NaN:no tween, 10:auto tween, [-1, 0):ease in, 0:line easing, (0, 1]:ease out, (1, 2]:ease in out
            outputFrame.tweenEasing = DataParser.getNumber(frameObject, dragonBones.ConstValues.A_TWEEN_EASING, 10);
            outputFrame.displayIndex = Math.floor(DataParser.getNumber(frameObject, dragonBones.ConstValues.A_DISPLAY_INDEX, 0) || 0);
            //如果为NaN，则说明没有改变过zOrder
            outputFrame.zOrder = DataParser.getNumber(frameObject, dragonBones.ConstValues.A_Z_ORDER, DataParser.tempDragonBonesData.isGlobal ? NaN : 0);
            var colorTransformObject = frameObject[dragonBones.ConstValues.COLOR];
            if (colorTransformObject) {
                outputFrame.color = new dragonBones.ColorTransform();
                DataParser.parseColorTransform(colorTransformObject, outputFrame.color);
            }
            return outputFrame;
        };
        DataParser.parseTimeline = function (timelineObject, outputTimeline) {
            var position = 0;
            var frame;
            var frameList = outputTimeline.frameList;
            for (var key in frameList) {
                frame = frameList[key];
                frame.position = position;
                position += frame.duration;
            }
            //防止duration计算有误差
            if (frame) {
                frame.duration = outputTimeline.duration - frame.position;
            }
        };
        DataParser.parseFrame = function (frameObject, outputFrame, frameRate) {
            if (frameRate === void 0) { frameRate = 0; }
            outputFrame.duration = Math.round(((frameObject[dragonBones.ConstValues.A_DURATION]) || 1) * 1000 / frameRate);
            outputFrame.action = frameObject[dragonBones.ConstValues.A_ACTION];
            outputFrame.event = frameObject[dragonBones.ConstValues.A_EVENT];
            outputFrame.sound = frameObject[dragonBones.ConstValues.A_SOUND];
            var curve = frameObject[dragonBones.ConstValues.A_CURVE];
            if (curve != null && curve.length == 4) {
                outputFrame.curve = new dragonBones.CurveData();
                outputFrame.curve.pointList = [new dragonBones.Point(curve[0], curve[1]), new dragonBones.Point(curve[2], curve[3])];
            }
        };
        DataParser.parseTransform = function (transformObject, transform, pivot) {
            if (pivot === void 0) { pivot = null; }
            if (transformObject) {
                if (transform) {
                    transform.x = DataParser.getNumber(transformObject, dragonBones.ConstValues.A_X, 0) || 0;
                    transform.y = DataParser.getNumber(transformObject, dragonBones.ConstValues.A_Y, 0) || 0;
                    transform.skewX = DataParser.getNumber(transformObject, dragonBones.ConstValues.A_SKEW_X, 0) * dragonBones.ConstValues.ANGLE_TO_RADIAN || 0;
                    transform.skewY = DataParser.getNumber(transformObject, dragonBones.ConstValues.A_SKEW_Y, 0) * dragonBones.ConstValues.ANGLE_TO_RADIAN || 0;
                    transform.scaleX = DataParser.getNumber(transformObject, dragonBones.ConstValues.A_SCALE_X, 1) || 0;
                    transform.scaleY = DataParser.getNumber(transformObject, dragonBones.ConstValues.A_SCALE_Y, 1) || 0;
                }
                if (pivot) {
                    pivot.x = DataParser.getNumber(transformObject, dragonBones.ConstValues.A_PIVOT_X, 0) || 0;
                    pivot.y = DataParser.getNumber(transformObject, dragonBones.ConstValues.A_PIVOT_Y, 0) || 0;
                }
            }
        };
        DataParser.parseColorTransform = function (colorTransformObject, colorTransform) {
            if (colorTransform) {
                colorTransform.alphaOffset = DataParser.getNumber(colorTransformObject, dragonBones.ConstValues.A_ALPHA_OFFSET, 0);
                colorTransform.redOffset = DataParser.getNumber(colorTransformObject, dragonBones.ConstValues.A_RED_OFFSET, 0);
                colorTransform.greenOffset = DataParser.getNumber(colorTransformObject, dragonBones.ConstValues.A_GREEN_OFFSET, 0);
                colorTransform.blueOffset = DataParser.getNumber(colorTransformObject, dragonBones.ConstValues.A_BLUE_OFFSET, 0);
                colorTransform.alphaMultiplier = DataParser.getNumber(colorTransformObject, dragonBones.ConstValues.A_ALPHA_MULTIPLIER, 100) * 0.01;
                colorTransform.redMultiplier = DataParser.getNumber(colorTransformObject, dragonBones.ConstValues.A_RED_MULTIPLIER, 100) * 0.01;
                colorTransform.greenMultiplier = DataParser.getNumber(colorTransformObject, dragonBones.ConstValues.A_GREEN_MULTIPLIER, 100) * 0.01;
                colorTransform.blueMultiplier = DataParser.getNumber(colorTransformObject, dragonBones.ConstValues.A_BLUE_MULTIPLIER, 100) * 0.01;
            }
        };
        DataParser.getBoolean = function (data, key, defaultValue) {
            if (data && key in data) {
                switch (String(data[key])) {
                    case "0":
                    case "NaN":
                    case "":
                    case "false":
                    case "null":
                    case "undefined":
                        return false;
                    case "1":
                    case "true":
                    default:
                        return true;
                }
            }
            return defaultValue;
        };
        DataParser.getNumber = function (data, key, defaultValue) {
            if (data && key in data) {
                switch (String(data[key])) {
                    case "NaN":
                    case "":
                    case "false":
                    case "null":
                    case "undefined":
                        return NaN;
                    default:
                        return Number(data[key]);
                }
            }
            return defaultValue;
        };
        return DataParser;
    })();
    dragonBones.DataParser = DataParser;
    DataParser.prototype.__class__ = "dragonBones.DataParser";
})(dragonBones || (dragonBones = {}));
