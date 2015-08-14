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
var swan;
(function (swan) {
    var loaderPool = [];
    var callBackMap = {};
    var loaderMap = {};
    /**
     * @language en_US
     * Default instance of interface <code>IAssetAdapter</code>.
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/supportClasses/DefaultAssetAdapterExample.ts
     */
    /**
     * @language zh_CN
     * 默认的IAssetAdapter接口实现。
     * @version Lark 1.0
     * @version Swan 1.0
     * @platform Web,Native
     * @includeExample examples/Samples/src/extension/swan/components/supportClasses/DefaultAssetAdapterExample.ts
     */
    var DefaultAssetAdapter = (function () {
        function DefaultAssetAdapter() {
        }
        var __egretProto__ = DefaultAssetAdapter.prototype;
        /**
         * @language en_US
         * resolve asset.
         * @param source the identifier of new asset need to be resolved
         * @param callBack callback function when resolving complete
         * example：callBack(content:any,source:string):void;
         * @param thisObject <code>this</code> object of callback method
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        /**
         * @language zh_CN
         * 解析素材
         * @param source 待解析的新素材标识符
         * @param callBack 解析完成回调函数，示例：callBack(content:any,source:string):void;
         * @param thisObject callBack的 this 引用
         * @version Lark 1.0
         * @version Swan 1.0
         * @platform Web,Native
         */
        __egretProto__.getAsset = function (source, callBack, thisObject) {
            var list = callBackMap[source];
            if (list) {
                list.push([callBack, thisObject]);
                return;
            }
            var loader = loaderPool.pop();
            if (!loader) {
                var loader = new egret.URLLoader();
                loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
            }
            callBackMap[source] = [[callBack, thisObject]];
            loaderMap[loader.$hashCode] = source;
            loader.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this);
            loader.addEventListener(egret.Event.IO_ERROR, this.onLoadFinish, this);
            loader.load(new egret.URLRequest(source));
        };
        /**
         * @private
         *
         * @param event
         */
        __egretProto__.onLoadFinish = function (event) {
            var loader = event.currentTarget;
            loader.removeEventListener(egret.Event.COMPLETE, this.onLoadFinish, this);
            loader.removeEventListener(egret.Event.IO_ERROR, this.onLoadFinish, this);
            var data;
            if (event.$type == egret.Event.COMPLETE) {
                data = loader.data;
                loader.data = null;
            }
            loaderPool.push(loader);
            var source = loaderMap[loader.$hashCode];
            delete loaderMap[loader.$hashCode];
            var list = callBackMap[source];
            delete callBackMap[source];
            var length = list.length;
            for (var i = 0; i < length; i++) {
                var arr = list[i];
                arr[0].call(arr[1], data, source);
            }
        };
        return DefaultAssetAdapter;
    })();
    swan.DefaultAssetAdapter = DefaultAssetAdapter;
    DefaultAssetAdapter.prototype.__class__ = "swan.DefaultAssetAdapter";
    egret.registerClass(DefaultAssetAdapter,"swan.DefaultAssetAdapter",["swan.IAssetAdapter"]);
})(swan || (swan = {}));