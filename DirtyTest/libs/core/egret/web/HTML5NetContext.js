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
    var web;
    (function (web) {
        /**
         * @class egret.HTML5NetContext
         * @classdesc
         * @extends egret.NetContext
         * @private
         */
        var HTML5NetContext = (function (_super) {
            __extends(HTML5NetContext, _super);
            /**
             * @private
             */
            function HTML5NetContext() {
                _super.call(this);
                this._imageLoader = new egret.ImageLoader();
            }
            var __egretProto__ = HTML5NetContext.prototype;
            /**
             * @private
             *
             * @param versionCtr
             */
            __egretProto__.initVersion = function (versionCtr) {
                this._versionCtr = versionCtr;
            };
            /**
             * @private
             *
             * @param loader
             */
            __egretProto__.proceed = function (loader) {
                var self = this;
                if (loader.dataFormat == egret.URLLoaderDataFormat.TEXTURE) {
                    this.loadTexture(loader);
                    return;
                }
                if (loader.dataFormat == egret.URLLoaderDataFormat.SOUND) {
                    this.loadSound(loader);
                    return;
                }
                var request = loader._request;
                var xhr = this.getXHR();
                xhr.onreadystatechange = onReadyStateChange;
                var virtualUrl = self.getVirtualUrl(egret.$getUrl(request));
                xhr.open(request.method, virtualUrl, true);
                this.setResponseType(xhr, loader.dataFormat);
                if (request.method == egret.URLRequestMethod.GET || !request.data) {
                    xhr.send();
                }
                else if (request.data instanceof egret.URLVariables) {
                    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    var urlVars = request.data;
                    xhr.send(urlVars.toString());
                }
                else {
                    xhr.setRequestHeader("Content-Type", "multipart/form-data");
                    xhr.send(request.data);
                }
                function onReadyStateChange() {
                    if (xhr.readyState == 4) {
                        if (xhr.status != loader._status) {
                            loader._status = xhr.status;
                            egret.HTTPStatusEvent.dispatchHTTPStatusEvent(loader, xhr.status);
                        }
                        if (xhr.status >= 400 || xhr.status == 0) {
                            egret.IOErrorEvent.dispatchIOErrorEvent(loader);
                        }
                        else {
                            onLoadComplete();
                        }
                    }
                }
                function onLoadComplete() {
                    switch (loader.dataFormat) {
                        case egret.URLLoaderDataFormat.TEXT:
                            loader.data = xhr.responseText;
                            break;
                        case egret.URLLoaderDataFormat.VARIABLES:
                            loader.data = new egret.URLVariables(xhr.responseText);
                            break;
                        case egret.URLLoaderDataFormat.BINARY:
                            loader.data = xhr.response;
                            break;
                        default:
                            loader.data = xhr.responseText;
                            break;
                    }
                    egret.$callAsync(egret.Event.dispatchEvent, egret.Event, loader, egret.Event.COMPLETE);
                }
            };
            /**
             * @private
             *
             * @param loader
             */
            __egretProto__.loadSound = function (loader) {
                var virtualUrl = this.getVirtualUrl(loader._request.url);
                var audio = new egret.Audio();
                audio.$loadByUrl(virtualUrl, function (code) {
                    if (code != 0) {
                        egret.IOErrorEvent.dispatchIOErrorEvent(loader);
                        return;
                    }
                    var sound = new egret.Sound();
                    sound.$setAudio(audio);
                    loader.data = sound;
                    egret.$callAsync(egret.Event.dispatchEvent, egret.Event, loader, egret.Event.COMPLETE);
                });
            };
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.getXHR = function () {
                if (window["XMLHttpRequest"]) {
                    return new window["XMLHttpRequest"]();
                }
                else {
                    return new ActiveXObject("MSXML2.XMLHTTP");
                }
            };
            /**
             * @private
             *
             * @param xhr
             * @param responseType
             */
            __egretProto__.setResponseType = function (xhr, responseType) {
                switch (responseType) {
                    case egret.URLLoaderDataFormat.TEXT:
                    case egret.URLLoaderDataFormat.VARIABLES:
                        xhr.responseType = egret.URLLoaderDataFormat.TEXT;
                        break;
                    case egret.URLLoaderDataFormat.BINARY:
                        xhr.responseType = "arraybuffer";
                        break;
                    default:
                        xhr.responseType = responseType;
                        break;
                }
            };
            /**
             * @private
             *
             * @param loader
             */
            __egretProto__.loadTexture = function (loader) {
                var virtualUrl = this.getVirtualUrl(loader._request.url);
                if (web.Html5Capatibility._WebPSupport && virtualUrl.indexOf("http:") != 0) {
                    if (virtualUrl.indexOf(".png") != -1) {
                        virtualUrl = virtualUrl.replace(".png", ".webp");
                    }
                    else if (virtualUrl.indexOf(".jpg") != -1) {
                        virtualUrl = virtualUrl.replace(".jpg", ".webp");
                    }
                }
                this._imageLoader.load(virtualUrl, function (code, bitmapData) {
                    if (code != 0) {
                        egret.IOErrorEvent.dispatchIOErrorEvent(loader);
                        return;
                    }
                    var texture = new egret.Texture();
                    texture._setBitmapData(bitmapData);
                    egret.Texture.$loaded(texture);
                    loader.data = texture;
                    egret.$callAsync(egret.Event.dispatchEvent, egret.Event, loader, egret.Event.COMPLETE);
                });
            };
            /**
             * @private
             *
             * @returns
             */
            __egretProto__.getChangeList = function () {
                return [];
            };
            /**
             * @private
             * 获取虚拟url
             * @param url
             * @returns {string}
             */
            __egretProto__.getVirtualUrl = function (url) {
                if (this._versionCtr) {
                    return this._versionCtr.getVirtualUrl(url);
                }
                return url;
            };
            HTML5NetContext.getNetContext = function () {
                if (HTML5NetContext._instance == null) {
                    HTML5NetContext._instance = new HTML5NetContext();
                }
                return HTML5NetContext._instance;
            };
            return HTML5NetContext;
        })(egret.HashObject);
        web.HTML5NetContext = HTML5NetContext;
        HTML5NetContext.prototype.__class__ = "egret.web.HTML5NetContext";
        egret.registerClass(HTML5NetContext,"egret.web.HTML5NetContext",["egret.NetContext"]);
        egret.NetContext = HTML5NetContext;
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));
