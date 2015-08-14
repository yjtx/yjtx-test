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
var egret;
(function (egret) {
    /**
     * @private
     */
    var Html5VersionController = (function (_super) {
        __extends(Html5VersionController, _super);
        function Html5VersionController() {
            _super.call(this);
        }
        var __egretProto__ = Html5VersionController.prototype;
        __egretProto__.fetchVersion = function () {
        };
        __egretProto__.checkIsNewVersion = function (virtualUrl) {
            return false;
        };
        __egretProto__.saveVersion = function (virtualUrl) {
        };
        /**
         * 获取所有有变化的文件
         * @returns {Array<string>}
         */
        __egretProto__.getChangeList = function () {
            return [];
        };
        __egretProto__.getVirtualUrl = function (url) {
            return url;
        };
        return Html5VersionController;
    })(egret.EventDispatcher);
    egret.Html5VersionController = Html5VersionController;
    Html5VersionController.prototype.__class__ = "egret.Html5VersionController";
    egret.registerClass(Html5VersionController,"egret.Html5VersionController",["egret.VersionController","egret.IVersionController"]);
    egret.VersionController = Html5VersionController;
})(egret || (egret = {}));