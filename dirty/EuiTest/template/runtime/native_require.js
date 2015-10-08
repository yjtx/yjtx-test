
var game_file_list = [
    //以下为自动修改，请勿修改
    //----auto game_file_list start----
	"libs/modules/egret/egret.js",
	"libs/modules/egret/egret.native.js",
	"libs/modules/game/game.js",
	"libs/modules/game/game.native.js",
	"libs/modules/tween/tween.js",
	"libs/modules/res/res.js",
	"libs/modules/eui/eui.js",
	"bin-debug/LoadingUI.js",
	"bin-debug/Main.js",
	"bin-debug/libs/LoadResources.js",
	"bin-debug/libs/utils.js",
	"bin-debug/test/all/AllExamples.js",
	"bin-debug/test/button/ButtonCancel.js",
	"bin-debug/test/button/ButtonInGroupClick.js",
	"bin-debug/test/button/ButtonOK.js",
	"bin-debug/test/editableText/EditableTextNormal.js",
	"bin-debug/test/editableText/EditableTextSkinNormal.js",
	"bin-debug/test/image/ImageNormal.js",
	"bin-debug/test/label/LabelNormal.js",
	"bin-debug/test/label/LabelNormalDelay.js",
	"bin-debug/test/list/ListNormal.js",
	"bin-debug/test/slide/SliderNormal.js",
	"bin-debug/test/swan/binding/BindingExample.js",
	"bin-debug/test/swan/binding/WatcherExample.js",
	"bin-debug/test/swan/collections/ArrayCollectionExample.js",
	"bin-debug/test/swan/components/ButtonExample.js",
	"bin-debug/test/swan/components/CheckboxExample.js",
	"bin-debug/test/swan/components/ComponentExample.js",
	"bin-debug/test/swan/components/DataGroupExample.js",
	"bin-debug/test/swan/components/EditablTextExample.js",
	"bin-debug/test/swan/components/GroupExample.js",
	"bin-debug/test/swan/components/HScrollBarExample.js",
	"bin-debug/test/swan/components/HSliderExample.js",
	"bin-debug/test/swan/components/ImageExample.js",
	"bin-debug/test/swan/components/ItemRendererExample.js",
	"bin-debug/test/swan/components/LabelExample.js",
	"bin-debug/test/swan/components/ListExample.js",
	"bin-debug/test/swan/components/PanelExample.js",
	"bin-debug/test/swan/components/ProgressBarExample.js",
	"bin-debug/test/swan/components/RadioButtonExample.js",
	"bin-debug/test/swan/components/RadioButtonGroupExample.js",
	"bin-debug/test/swan/components/ScrollerExample.js",
	"bin-debug/test/swan/components/SkinExample.js",
	"bin-debug/test/swan/components/TabBarExample.js",
	"bin-debug/test/swan/components/ToggleButtonExample.js",
	"bin-debug/test/swan/components/ToggleSwitchExample.js",
	"bin-debug/test/swan/components/VScrollBarExample.js",
	"bin-debug/test/swan/components/VSliderExample.js",
	"bin-debug/test/swan/components/ViewStackExample.js",
	"bin-debug/test/swan/components/supportClasses/DefaultAssetAdapterExample.js",
	"bin-debug/test/swan/components/supportClasses/RangeExample.js",
	"bin-debug/test/swan/core/BitmapFillModeExample.js",
	"bin-debug/test/swan/core/DirectionExample.js",
	"bin-debug/test/swan/core/ScrollPolicyExample.js",
	"bin-debug/test/swan/core/ThemeExample.js",
	"bin-debug/test/swan/events/CollectionEventExample.js",
	"bin-debug/test/swan/events/ItemTapEventExample.js",
	"bin-debug/test/swan/events/PropertyEventExample.js",
	"bin-debug/test/swan/events/UIEventExample.js",
	"bin-debug/test/swan/layout/BasicLayoutExample.js",
	"bin-debug/test/swan/layout/ColumnAlignExample.js",
	"bin-debug/test/swan/layout/HorizontalLayoutExample.js",
	"bin-debug/test/swan/layout/JustifyAlignExample.js",
	"bin-debug/test/swan/layout/RowAlignExample.js",
	"bin-debug/test/swan/layout/TileLayoutExample.js",
	"bin-debug/test/swan/layout/TileOrientationExample.js",
	"bin-debug/test/swan/layout/VerticalLayoutExample.js",
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
		fpsStyles: "x:0,y:0,size:30,textColor:0x00c200,bgAlpha:0.9",
		showLog: true,
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