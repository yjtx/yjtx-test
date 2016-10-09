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
    var d = __define,c=LoadResources,p=c.prototype;
    p.loadTheme = function () {
        var _this = this;
        TempLoader.load(this._skins, function () { return _this.loaded(); });
    };
    p.loaded = function () {
        new eui.Theme("resource/theme/blue-theme.json", this._stage);
        this._callback.call(this._thisObj);
    };
    return LoadResources;
}());
egret.registerClass(LoadResources,'LoadResources');
var TempLoader = (function () {
    function TempLoader() {
    }
    var d = __define,c=TempLoader,p=c.prototype;
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
}());
egret.registerClass(TempLoader,'TempLoader');
