/**
 * Created by yjtx on 15-8-10.
 */
var LoadResources = (function () {
    function LoadResources(callback, thisObj, stage, skins) {
        this._stage = stage;
        this._callback = callback;
        this._thisObj = thisObj;
        this._skins = skins;
        this.loadTheme();
    }
    var __egretProto__ = LoadResources.prototype;
    __egretProto__.loadTheme = function () {
        var _this = this;
        TempLoader.load(this._skins, function () { return _this.loaded(); });
    };
    __egretProto__.loaded = function () {
        new swan.Theme("resource/theme/blue-theme.json", this._stage);
        this._callback.call(this._thisObj);
    };
    return LoadResources;
})();
LoadResources.prototype.__class__ = "LoadResources";
egret.registerClass(LoadResources,"LoadResources");
var TempLoader = (function () {
    function TempLoader() {
    }
    var __egretProto__ = TempLoader.prototype;
    TempLoader.load = function (urls, callback) {
        var _this = this;
        var total = urls.length;
        var got = 0;
        urls.forEach(function (url) {
            EXML.load(url, function () {
                got++;
                if (got == total)
                    callback();
            }, _this);
        });
    };
    return TempLoader;
})();
TempLoader.prototype.__class__ = "TempLoader";
egret.registerClass(TempLoader,"TempLoader");
