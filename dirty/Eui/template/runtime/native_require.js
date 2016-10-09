
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/eui/eui.js",
	"libs/modules/res/res.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"bin-debug/AssetAdapter.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/ThemeAdapter.js",
	"bin-debug/gamelibs/EntryEuiDocument.js",
	"bin-debug/gamelibs/LoadResources.js",
	"bin-debug/gamelibs/ResourceUtils.js",
	"bin-debug/test/button/ButtonWithFilters.js",
	"bin-debug/test/button/ButtonWithInput.js",
	"bin-debug/test/button/EditTextLineSpacing.js",
	"bin-debug/test/function/FunctionDivSetterAndGetter.js",
	"bin-debug/test/image/ImageExmlIn.js",
	"bin-debug/test/image/ImageExmlOut.js",
	"bin-debug/test/image/ImageExmlPosition.js",
	"bin-debug/test/image/ImageNormal.js",
	"bin-debug/test/list/ListTile.js",
	"bin-debug/test/panel/PanelWithButton.js",
	"bin-debug/test/rect/RectExmlSimple.js",
	"bin-debug/test/scroller/ScrollerExmlIn.js",
	"bin-debug/test/scroller/ScrollerExmlOut.js",
	"bin-debug/test/scroller/ScrollerWithBitmap.js",
	"bin-debug/test/skin/SkinButton.js",
	"bin-debug/test/textinput/TextInputWithEXML.js",
	//----auto game_file_list end----
];

var window = {};

egret_native.setSearchPaths([""]);

egret_native.requireFiles = function () {
    for (var key in game_file_list) {
        var src = game_file_list[key];
        require(src);
    }
};

egret_native.egretInit = function () {
    egret_native.requireFiles();
    egret.TextField.default_fontFamily = "/system/fonts/DroidSansFallback.ttf";
    //egret.dom为空实现
    egret.dom = {};
    egret.dom.drawAsCanvas = function () {
    };
};

egret_native.egretStart = function () {
    var option = {
        //以下为自动修改，请勿修改
        //----auto option start----
		entryClassName: "Main",
		frameRate: 30,
		scaleMode: "showAll",
		contentWidth: 480,
		contentHeight: 800,
		showPaintRect: false,
		showFPS: true,
		fpsStyles: "x:0,y:0,size:12,textColor:0x00c200,bgAlpha:0.9",
		showLog: false,
		logFilter: "",
		maxTouches: 2,
		textureScaleFactor: 1
		//----auto option end----
    };

    egret.native.NativePlayer.option = option;
    egret.runEgret();
    egret_native.Label.createLabel(egret.TextField.default_fontFamily, 20, "", 0);
    egret_native.EGTView.preSetOffScreenBufferEnable(true);
};