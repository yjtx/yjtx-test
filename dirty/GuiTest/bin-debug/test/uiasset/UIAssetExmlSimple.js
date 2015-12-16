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
var UIAssetExmlSimple = (function (_super) {
    __extends(UIAssetExmlSimple, _super);
    function UIAssetExmlSimple() {
        _super.call(this);
    }
    var d = __define,c=UIAssetExmlSimple;p=c.prototype;
    p.initRoot = function () {
        var guiLayer = new egret.gui.UIStage();
        this.addChild(guiLayer);
        var ui = new SimpleUIAsset();
        guiLayer.addElement(ui);
    };
    return UIAssetExmlSimple;
})(EntryDisplayObjectContainer);
egret.registerClass(UIAssetExmlSimple,"UIAssetExmlSimple");
var SimpleUIAsset = (function (_super) {
    __extends(SimpleUIAsset, _super);
    function SimpleUIAsset() {
        _super.call(this);
        //  指定当前类的皮肤名称
        //  Assign the skin name used by this Component
        this.skinName = "skins.scene.SimpleUIAssetSkin";
    }
    var d = __define,c=SimpleUIAsset;p=c.prototype;
    return SimpleUIAsset;
})(egret.gui.SkinnableComponent);
egret.registerClass(SimpleUIAsset,"SimpleUIAsset");
