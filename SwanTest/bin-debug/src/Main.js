var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        this.green_skins = [
            "resource/components/green/ListGroup.exml",
            "resource/components/green/TabBar.exml",
            "resource/components/MainGroup.exml"
        ];
        this.blue_skins = [
            "resource/components/blue/ListGroup.exml",
            "resource/components/blue/TabBar.exml",
            "resource/components/MainGroup.exml"
        ];
    }
    var __egretProto__ = Main.prototype;
    __egretProto__.createChildren = function () {
        _super.prototype.createChildren.call(this);
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
        var bg = new swan.Image();
        bg.source = "resource/assets/blackBg.png";
        bg.percentHeight = 100;
        bg.percentWidth = 80;
        this.addChild(bg);
        var input = new swan.EditableText();
        input.text = "asdfsf";
        this.addChild(input);
        var label = new swan.Label();
        label.horizontalCenter = 0;
        label.verticalCenter = -40;
        label.text = "选择一个主题";
        label.textColor = 0xFFFFFF;
        this.addChild(label);
        var themeGroup = new swan.Group();
        themeGroup.horizontalCenter = 0;
        themeGroup.verticalCenter = 0;
        themeGroup.layout = new swan.HorizontalLayout();
        themeGroup.touchEnabled = true;
        themeGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchTheme, this);
        this.addChild(themeGroup);
        var image = new swan.Image();
        //image.touchEnabled = true;
        image.name = "blue";
        image.width = 100;
        image.height = 40;
        image.source = "resource/assets/blue/Panel/header.png";
        themeGroup.addChild(image);
        var image2 = new swan.Image();
        //image2.touchEnabled = true;
        image2.name = "green";
        image2.width = 100;
        image2.height = 40;
        image2.source = "resource/assets/green/Panel/header.png";
        themeGroup.addChild(image2);
    };
    __egretProto__.touchTheme = function (event) {
        var _this = this;
        if (event.target.name) {
            var name = event.target.name;
            this.themeName = name;
            var skins = [
                "resource/components/" + name + "/ListGroup.exml",
                "resource/components/" + name + "/TabBar.exml",
                "resource/components/CloseButton.exml",
                "resource/components/CancelButton.exml"
            ];
            Loader.load(skins, function () {
                Loader.load(["resource/components/MainGroup.exml"], function () { return _this.loaded(); });
            });
        }
    };
    __egretProto__.loaded = function () {
        new swan.Theme("resource/theme/" + this.themeName + "-theme.json", this.stage);
        this.removeChildren();
        var ui = utils.createClass("components.MainGroup");
        this.addChild(ui);
    };
    return Main;
})(swan.Group);
Main.prototype.__class__ = "Main";
egret.registerClass(Main,"Main");
var Loader = (function () {
    function Loader() {
    }
    var __egretProto__ = Loader.prototype;
    Loader.load = function (urls, callback) {
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
    return Loader;
})();
Loader.prototype.__class__ = "Loader";
egret.registerClass(Loader,"Loader");
