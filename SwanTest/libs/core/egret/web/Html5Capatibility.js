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
         * @private
         */
        var AudioType = (function () {
            function AudioType() {
            }
            var __egretProto__ = AudioType.prototype;
            /**
             * @private
             */
            AudioType.QQ_AUDIO = 1;
            /**
             * @private
             */
            AudioType.WEB_AUDIO = 2;
            /**
             * @private
             */
            AudioType.HTML5_AUDIO = 3;
            return AudioType;
        })();
        web.AudioType = AudioType;
        AudioType.prototype.__class__ = "egret.web.AudioType";
        egret.registerClass(AudioType,"egret.web.AudioType");
        /**
         * @private
         */
        var SystemOSType = (function () {
            function SystemOSType() {
            }
            var __egretProto__ = SystemOSType.prototype;
            /**
             * @private
             */
            SystemOSType.WPHONE = 1;
            /**
             * @private
             */
            SystemOSType.IOS = 2;
            /**
             * @private
             */
            SystemOSType.ADNROID = 3;
            return SystemOSType;
        })();
        web.SystemOSType = SystemOSType;
        SystemOSType.prototype.__class__ = "egret.web.SystemOSType";
        egret.registerClass(SystemOSType,"egret.web.SystemOSType");
        /**
         * html5兼容性配置
         * @private
         */
        var Html5Capatibility = (function (_super) {
            __extends(Html5Capatibility, _super);
            /**
             * @private
             */
            function Html5Capatibility() {
                _super.call(this);
            }
            var __egretProto__ = Html5Capatibility.prototype;
            /**
             * @private
             *
             */
            Html5Capatibility._init = function () {
                var ua = navigator.userAgent.toLowerCase();
                Html5Capatibility.ua = ua;
                egret.Capabilities.$isMobile = (ua.indexOf('mobile') != -1 || ua.indexOf('android') != -1);
                Html5Capatibility._canUseBlob = false;
                Html5Capatibility._audioType = AudioType.HTML5_AUDIO;
                Html5Capatibility._AudioClass = egret.web.Html5Audio;
                Html5Capatibility._audioMustLoad = true;
                if (ua.indexOf("windows phone") >= 0) {
                    Html5Capatibility._System_OS = SystemOSType.WPHONE;
                    Html5Capatibility._audioMustLoad = false;
                    egret.Capabilities.$os = "Windows Phone";
                }
                else if (ua.indexOf("android") >= 0) {
                    Html5Capatibility._System_OS = SystemOSType.ADNROID;
                    if (ua.indexOf("ucbrowser") >= 0) {
                        Html5Capatibility._audioMustLoad = false;
                    }
                    egret.Capabilities.$os = "Android";
                    Html5Capatibility._System_OS = SystemOSType.ADNROID;
                    if (window.hasOwnProperty("QZAppExternal") && ua.indexOf("qzone") >= 0) {
                        Html5Capatibility._audioType = AudioType.QQ_AUDIO;
                        Html5Capatibility._AudioClass = egret.web.QQAudio;
                        var bases = document.getElementsByTagName('base');
                        if (bases && bases.length > 0) {
                            Html5Capatibility._QQRootPath = bases[0]["baseURI"];
                        }
                        else {
                            var endIdx = window.location.href.indexOf("?");
                            if (endIdx == -1) {
                                endIdx = window.location.href.length;
                            }
                            var url = window.location.href.substring(0, endIdx);
                            url = url.substring(0, url.lastIndexOf("/"));
                            Html5Capatibility._QQRootPath = url + "/";
                        }
                    }
                }
                else if (ua.indexOf("iphone") >= 0 || ua.indexOf("ipad") >= 0 || ua.indexOf("ipod") >= 0) {
                    egret.Capabilities.$os = "iOS";
                    Html5Capatibility._System_OS = SystemOSType.IOS;
                    if (Html5Capatibility.getIOSVersion() >= 7) {
                        Html5Capatibility._canUseBlob = true;
                        Html5Capatibility._AudioClass = egret.web.WebAudio;
                        Html5Capatibility._audioType = AudioType.WEB_AUDIO;
                    }
                }
                else {
                    if (ua.indexOf("windows nt") != -1) {
                        egret.Capabilities.$os = "Windows PC";
                    }
                    else if (ua.indexOf("mac os") != -1) {
                        egret.Capabilities.$os = "Mac OS";
                    }
                }
                var winURL = window["URL"] || window["webkitURL"];
                if (!winURL) {
                    Html5Capatibility._canUseBlob = false;
                }
                var canUseWebAudio = window["AudioContext"] || window["webkitAudioContext"] || window["mozAudioContext"];
                if (!canUseWebAudio && Html5Capatibility._audioType == AudioType.WEB_AUDIO) {
                    Html5Capatibility._audioType = AudioType.HTML5_AUDIO;
                    Html5Capatibility._AudioClass = egret.web.Html5Audio;
                }
                egret.Audio = Html5Capatibility._AudioClass;
            };
            /**
             * @private
             * 获取ios版本
             * @returns {string}
             */
            Html5Capatibility.getIOSVersion = function () {
                var value = Html5Capatibility.ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/)[0];
                return parseInt(value.match(/\d(_\d)*/)[0]) || 0;
            };
            /**
             * @private
             *
             */
            Html5Capatibility.checkHtml5Support = function () {
                var geolocation = 'geolocation' in navigator;
                var orientation = 'DeviceOrientationEvent' in window;
                var motion = 'DeviceMotionEvent' in window;
                egret.Capabilities.$hasGeolocation = geolocation;
                egret.Capabilities.$hasMotion = motion;
                egret.Capabilities.$hasOrientation = orientation;
                var language = (navigator.language || navigator.browserLanguage).toLowerCase();
                var strings = language.split("-");
                if (strings.length > 1) {
                    strings[1] = strings[1].toUpperCase();
                }
                egret.Capabilities.$language = strings.join("-");
            };
            //当前浏览器版本是否支持blob
            Html5Capatibility._canUseBlob = false;
            //当前浏览器版本是否支持webaudio
            Html5Capatibility._audioType = 0;
            Html5Capatibility._audioMustLoad = false;
            /**
             * @private
             */
            Html5Capatibility._QQRootPath = "";
            /**
             * @private
             */
            Html5Capatibility._System_OS = 0;
            /**
             * @private
             */
            Html5Capatibility._WebPSupport = false;
            /**
             * @private
             */
            Html5Capatibility.ua = "";
            return Html5Capatibility;
        })(egret.HashObject);
        web.Html5Capatibility = Html5Capatibility;
        Html5Capatibility.prototype.__class__ = "egret.web.Html5Capatibility";
        egret.registerClass(Html5Capatibility,"egret.web.Html5Capatibility");
        Html5Capatibility._init();
        /**
         * @private
         */
        var currentPrefix = null;
        /**
         * @private
         */
        function getPrefixStyleName(name, element) {
            var header = "";
            if (element != null) {
                header = getPrefix(name, element);
            }
            else {
                if (currentPrefix == null) {
                    var tempStyle = document.createElement('div').style;
                    currentPrefix = getPrefix("transform", tempStyle);
                }
                header = currentPrefix;
            }
            if (header == "") {
                return name;
            }
            return header + name.charAt(0).toUpperCase() + name.substring(1, name.length);
        }
        web.getPrefixStyleName = getPrefixStyleName;
        /**
         * @private
         */
        function getPrefix(name, element) {
            if (name in element) {
                return "";
            }
            name = name.charAt(0).toUpperCase() + name.substring(1, name.length);
            var transArr = ["webkit", "ms", "Moz", "O"];
            for (var i = 0; i < transArr.length; i++) {
                var tempStyle = transArr[i] + name;
                if (tempStyle in element) {
                    return transArr[i];
                }
            }
            return "";
        }
    })(web = egret.web || (egret.web = {}));
})(egret || (egret = {}));
