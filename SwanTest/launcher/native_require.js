var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    require("bin-debug/lib/egret_file_list.js");
    require("bin-debug/src/game_file_list.js");
    for (var key in egret_file_list) {
        var src = "libs/" + egret_file_list[key];
        require(src);

    }
    for (var key in game_file_list) {
        var src = "bin-debug/src/" + game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    //此变量用于加载文件判断，请勿修改此处
    //This variable is used to load the file judgement, please do not change it
    var needCompile = false;
    if (!needCompile) {
        egret_native.requireFiles();
    }
    else {
        require("launcher/game-min-native.js");
    }
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    //todo 脚本解析，更好的形式
    var option = {
        entryClassName: "Main",
        frameRate: 60,
        scaleMode: "showAll",
        contentWidth: 480,
        contentHeight: 800,
        orientation: "auto",
        showPaintRect: false,
        showFPS: false,
        fpsStyles: {x: 0, y: 0, size: 24, textColor: 0xffffff},
        showLog: false,
        logFilter: "",
        maxTouches: 1,
        textureScaleFactor: 1
    };
    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};