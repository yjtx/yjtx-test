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
var Base64FromCrossUrl = (function (_super) {
    __extends(Base64FromCrossUrl, _super);
    function Base64FromCrossUrl() {
        _super.call(this);
    }
    var d = __define,c=Base64FromCrossUrl,p=c.prototype;
    p.initRoot = function () {
        // egret.ImageLoader.crossOrigin = "anonymous";
        RES.getResByUrl("http://official.egret.com/new-egret/img/egret-nav-icon-2.png", function (texture) {
            // RES.getResByUrl("http://dfm.cdn.ran10.com.cn/game/resource/assets/btn_left.png", function (texture:egret.Texture) {
            var bitmap = new egret.Bitmap(texture);
            this.addChild(bitmap);
            bitmap.pixelHitTest = true;
            bitmap.touchEnabled = true;
            // var base64 = texture.toDataURL("image/png");
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    return Base64FromCrossUrl;
}(EntryDisplayObjectContainer));
egret.registerClass(Base64FromCrossUrl,'Base64FromCrossUrl');
