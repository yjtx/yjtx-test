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
var eui;
(function (eui) {
    /**
     * @language en_US
     * Note: The skin name values in the skin theme are used as default values,which can not be changed while running.
     * You can change the skin of a component with the skinName property.
     * @event egret.Event.COMPLETE Emit when EXML used in this theme is loaded and parsed.
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/eui/core/ThemeExample.ts
     */
    /**
     * @language zh_CN
     * 皮肤主题。注意：皮肤主题是一次性设置的默认值,并不能运行时切换所有组件默认皮肤。切换单个皮肤您可以自行对Component.skinName赋值来修改。
     * @event egret.Event.COMPLETE 当主题关联的EXML加载解析完成时派发
     * @version Egret 2.4
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/eui/core/ThemeExample.ts
     */
    var Theme = (function (_super) {
        __extends(Theme, _super);
        /**
         * @language en_US
         * Create an instance of Theme
         * @param configURL the external theme path. if null, you need to register the default skin name with
         * mapSkin() manually.
         * @param stage current stage. The theme will register to the stage with this parameter.
         * If null, you need to register with stage.registerImplementation("eui.Theme",theme)
         * manually.
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 创建一个主题实例
         * @param configURL 要加载并解析的外部主题配置文件路径。若传入 null，将不进行配置文件加载，
         * 之后需要在外部以代码方式手动调用 mapSkin() 方法完成每条默认皮肤名的注册。
         * @param stage 当前舞台引用。传入此参数，主题会自动注册自身到舞台上。
         * 若传入null，需要在外部手动调用 stage.registerImplementation("eui.Theme",theme) 来完成主题的注册。
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        function Theme(configURL, stage) {
            _super.call(this);
            /**
             * @private
             */
            this.delayList = [];
            /**
             * @private
             */
            this.skinMap = {};
            this.initialized = !configURL;
            if (stage) {
                stage.registerImplementation("eui.Theme", this);
            }
            this.load(configURL);
        }
        var __egretProto__ = Theme.prototype;
        /**
         * @private
         *
         * @param url
         */
        __egretProto__.load = function (url) {
            var request = new egret.HttpRequest();
            request.addEventListener(egret.Event.COMPLETE, this.onConfigLoaded, this);
            request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onConfigLoaded, this);
            request.open(url);
            request.send();
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.onConfigLoaded = function (event) {
            var request = event.target;
            try {
                var data = JSON.parse(request.response);
            }
            catch (e) {
                if (DEBUG) {
                    egret.error(e.message);
                }
            }
            if (data && data.skins) {
                var skinMap = this.skinMap;
                var skins = data.skins;
                var keys = Object.keys(skins);
                var length = keys.length;
                for (var i = 0; i < length; i++) {
                    var key = keys[i];
                    if (!skinMap[key]) {
                        this.mapSkin(key, skins[key]);
                    }
                }
            }
            if (!data.exmls || data.exmls.length == 0) {
                this.onLoaded();
            }
            else if (data.exmls[0]['content']) {
                data.exmls.forEach(function (exml) { return EXML.$parseURLContent(exml.path, exml.content); });
                this.onLoaded();
            }
            else {
                EXML.$loadAll(data.exmls, this.onLoaded, this, true);
            }
        };
        __egretProto__.onLoaded = function (classes, urls) {
            this.initialized = true;
            this.handleDelayList();
            this.dispatchEventWith(egret.Event.COMPLETE);
        };
        /**
         * @private
         *
         */
        __egretProto__.handleDelayList = function () {
            var list = this.delayList;
            var length = list.length;
            for (var i = 0; i < length; i++) {
                var client = list[i];
                if (!client.$Component[5 /* skinNameExplicitlySet */]) {
                    var skinName = this.getSkinName(client);
                    if (skinName) {
                        client.$Component[1 /* skinName */] = skinName;
                        client.$parseSkinName();
                    }
                }
            }
            list.length = 0;
        };
        /**
         * @language en_US
         * According to the host component to get the default skin name.
         * Search rules are as follows:
         * <li>1. Use the <code>hostComponentKey</code> of client to search.</li>
         * <li>2. Use the class name of client to search.</li>
         * <li>3. Use the parent class name of client to search.</li>
         * <li>4. Repeat step 3 until find the skin name or the parent is <code>eui.Component</code>.</li>
         * @param client the component need to get the default skin.
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 根据主机组件，获取对应的默认皮肤名。查询规则如下：
         * <li>1.使用client的hostComponentKey作为键查询默认皮肤名。</li>
         * <li>2.使用client的类名作为键查询默认皮肤名。</li>
         * <li>3.使用client的父类名作为键查询默认皮肤名。</li>
         * <li>4.不断重复3直到查询到皮肤名或父类为swan.Component时停止。</li>
         * @param client 要获取默认皮肤的组件。
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.getSkinName = function (client) {
            if (!this.initialized) {
                if (this.delayList.indexOf(client) == -1) {
                    this.delayList.push(client);
                }
                return "";
            }
            var skinMap = this.skinMap;
            var skinName = skinMap[client.hostComponentKey];
            if (!skinName) {
                skinName = this.findSkinName(client);
            }
            return skinName;
        };
        /**
         * @private
         */
        __egretProto__.findSkinName = function (prototype) {
            if (!prototype) {
                return "";
            }
            var key = prototype["__class__"];
            if (key === void 0) {
                return "";
            }
            var skinName = this.skinMap[key];
            if (skinName || key == "eui.Component") {
                return skinName;
            }
            return this.findSkinName(Object.getPrototypeOf(prototype));
        };
        /**
         * @language en_US
         * Map a default skin for the specified host component.
         * @param hostComponentKey the name of host component, such as "eui.Button".
         * @param skinName the name of skin, such as "app.MyButtonSkin".
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 为指定的主机组件映射一个默认皮肤。
         * @param hostComponentKey 主机组件名称，例如：“eui.Button”。
         * @param skinName 皮肤名称 例如："app.MyButtonSkin"。
         * @version Egret 2.4
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.mapSkin = function (hostComponentKey, skinName) {
            if (DEBUG) {
                if (!hostComponentKey) {
                    egret.$error(1003, "hostComponentKey");
                }
                if (!skinName) {
                    egret.$error(1003, "skinName");
                }
            }
            this.skinMap[hostComponentKey] = skinName;
        };
        return Theme;
    })(egret.EventDispatcher);
    eui.Theme = Theme;
    Theme.prototype.__class__ = "eui.Theme";
    egret.registerClass(Theme,"eui.Theme");
})(eui || (eui = {}));
