var egret_file_list = [
	"core/egret/i18n/tr.js",
	"core/egret/i18n/en_US.js",
	"core/egret/i18n/zh_CN.js",
	"core/egret/utils/registerClass.js",
	"core/Defines.debug.js",
	"core/egret/utils/extends.js",
	"core/egret/utils/NumberUtils.js",
	"core/egret/utils/HashObject.js",
	"core/egret/utils/ByteArray.js",
	"core/egret/utils/getDefinitionByName.js",
	"core/egret/utils/getQualifiedClassName.js",
	"core/egret/utils/getQualifiedSuperclassName.js",
	"core/egret/utils/Injector.js",
	"core/egret/utils/Recycler.js",
	"core/egret/utils/getTimer.js",
	"core/egret/utils/toColorString.js",
	"core/egret/utils/is.js",
	"core/egret/utils/NONE.js",
	"core/egret/utils/startTick.js",
	"core/egret/utils/stopTick.js",
	"core/egret/utils/XML.js",
	"core/egret/utils/callLater.js",
	"core/egret/utils/setTimeout.js",
	"core/egret/utils/setInterval.js",
	"core/egret/utils/Logger.js",
	"core/egret/utils/hasDefinition.js",
	"core/egret/utils/getOption.js",
	"core/egret/geom/Matrix.js",
	"core/egret/geom/Point.js",
	"core/egret/geom/Rectangle.js",
	"core/egret/events/EventDispatcher.js",
	"core/egret/utils/Timer.js",
	"core/egret/events/Event.js",
	"core/egret/events/ProgressEvent.js",
	"core/egret/events/TimerEvent.js",
	"core/egret/events/TouchEvent.js",
	"core/egret/events/HTTPStatusEvent.js",
	"core/egret/events/IOErrorEvent.js",
	"core/egret/events/SoundEvent.js",
	"core/egret/events/TextEvent.js",
	"core/egret/events/FocusEvent.js",
	"core/egret/display/BlendMode.js",
	"core/egret/display/DisplayObject.js",
	"core/egret/display/Bitmap.js",
	"core/egret/display/BitmapFillMode.js",
	"core/egret/display/Texture.js",
	"core/egret/display/RenderTexture.js",
	"core/egret/display/DisplayObjectContainer.js",
	"core/egret/display/GraphicsRenderContext.js",
	"core/egret/display/Graphics.js",
	"core/egret/display/Shape.js",
	"core/egret/display/Sprite.js",
	"core/egret/display/Stage.js",
	"core/egret/display/FrameLabel.js",
	"core/egret/display/MovieClipData.js",
	"core/egret/display/MovieClipDataFactory.js",
	"core/egret/display/MovieClip.js",
	"core/egret/display/SpriteSheet.js",
	"core/egret/display/ScrollView.js",
	"core/egret/display/ScrollViewProperties.js",
	"core/egret/net/URLRequestMethod.js",
	"core/egret/net/URLLoaderDataFormat.js",
	"core/egret/net/URLVariables.js",
	"core/egret/net/URLRequestHeader.js",
	"core/egret/net/URLRequest.js",
	"core/egret/net/URLLoader.js",
	"core/egret/net/NetContext.js",
	"core/egret/net/IVersionController.js",
	"core/egret/net/BaseImageLoader.js",
	"core/egret/net/ImageLoader.js",
	"core/egret/player/EgretEntry.js",
	"core/egret/player/OrientationMode.js",
	"core/egret/player/DirtyRegion.js",
	"core/egret/player/DisplayList.js",
	"core/egret/player/Player.js",
	"core/egret/player/Region.js",
	"core/egret/player/StageScaleMode.js",
	"core/egret/player/ScreenAdapter.js",
	"core/egret/player/SurfaceFactory.js",
	"core/egret/player/Ticker.js",
	"core/egret/player/TouchHandler.js",
	"core/egret/system/Capabilities.js",
	"core/egret/system/Console.js",
	"core/egret/text/HorizontalAlign.js",
	"core/egret/text/TextFieldType.js",
	"core/egret/text/TextField.js",
	"core/egret/text/VerticalAlign.js",
	"core/egret/text/TextFieldUtils.js",
	"core/egret/text/StageText.js",
	"core/egret/text/InputController.js",
	"core/egret/text/HtmlTextParser.js",
	"core/egret/text/BitmapFont.js",
	"core/egret/text/BitmapText.js",
	"core/egret/tween/Tween.js",
	"core/egret/tween/Ease.js",
	"core/egret/system/MainContext.js",
	"core/egret/localStorage/localStorage.js",
	"core/egret/external/ExternalInterface.js",
	"core/egret/filters/Filter.js",
	"core/egret/filters/GlowFilter.js",
	"core/egret/filters/BlurFilter.js",
	"core/egret/filters/ColorMatrixFilter.js",
	"core/egret/filters/DropShadowFilter.js",
	"core/egret/media/Audio.js",
	"core/egret/media/Sound.js",
	"core/egret/utils/PromiseObject.js",
	"core/extension/version/DefaultLoadingView.js",
	"core/extension/version/Html5VersionController.js",
	"core/extension/resource/events/ResourceEvent.js",
	"core/extension/resource/core/ResourceItem.js",
	"core/extension/resource/core/ResourceConfig.js",
	"core/extension/resource/core/ResourceLoader.js",
	"core/extension/resource/analyzer/AnalyzerBase.js",
	"core/extension/resource/analyzer/BinAnalyzer.js",
	"core/extension/resource/analyzer/ImageAnalyzer.js",
	"core/extension/resource/analyzer/JsonAnalyzer.js",
	"core/extension/resource/analyzer/TextAnalyzer.js",
	"core/extension/resource/analyzer/SheetAnalyzer.js",
	"core/extension/resource/analyzer/FontAnalyzer.js",
	"core/extension/resource/analyzer/SoundAnalyzer.js",
	"core/extension/resource/analyzer/XMLAnalyzer.js",
	"core/extension/resource/Resource.js",
	"core/extension/swan/core/BitmapFillMode.js",
	"core/extension/swan/core/ScrollPolicy.js",
	"core/extension/swan/core/Theme.js",
	"core/extension/swan/core/Validator.js",
	"core/extension/swan/core/UIComponent.js",
	"core/extension/swan/states/State.js",
	"core/extension/swan/utils/registerProperty.js",
	"core/extension/swan/components/Component.js",
	"core/extension/swan/components/Group.js",
	"core/extension/swan/utils/registerBindable.js",
	"core/extension/swan/components/Button.js",
	"core/extension/swan/components/DataGroup.js",
	"core/extension/swan/components/supportClasses/Range.js",
	"core/extension/swan/layouts/supportClasses/LayoutBase.js",
	"core/extension/swan/components/ToggleButton.js",
	"core/extension/swan/components/supportClasses/DefaultAssetAdapter.js",
	"core/extension/swan/components/supportClasses/ListBase.js",
	"core/extension/swan/components/supportClasses/ScrollBarBase.js",
	"core/extension/swan/components/supportClasses/SliderBase.js",
	"core/extension/swan/events/ScrollerThrowEvent.js",
	"core/extension/swan/exml/EXMLConfig.js",
	"core/extension/swan/layouts/supportClasses/LinearLayoutBase.js",
	"core/extension/swan/events/PropertyEvent.js",
	"core/extension/swan/binding/Watcher.js",
	"core/extension/swan/components/Skin.js",
	"core/extension/swan/binding/Binding.js",
	"core/extension/swan/states/AddItems.js",
	"core/extension/swan/states/SetProperty.js",
	"core/extension/swan/components/supportClasses/Animation.js",
	"core/extension/swan/events/CollectionEvent.js",
	"core/extension/swan/events/CollectionEventKind.js",
	"core/extension/swan/exml/CodeFactory.js",
	"core/extension/swan/layouts/JustifyAlign.js",
	"core/extension/swan/components/HScrollBar.js",
	"core/extension/swan/components/Label.js",
	"core/extension/swan/components/RadioButtonGroup.js",
	"core/extension/swan/components/VScrollBar.js",
	"core/extension/swan/components/ViewStack.js",
	"core/extension/swan/components/supportClasses/TouchScroll.js",
	"core/extension/swan/core/Direction.js",
	"core/extension/swan/events/ItemTapEvent.js",
	"core/extension/swan/events/UIEvent.js",
	"core/extension/swan/exml/EXMLParser.js",
	"core/extension/swan/layouts/ColumnAlign.js",
	"core/extension/swan/layouts/HorizontalLayout.js",
	"core/extension/swan/layouts/RowAlign.js",
	"core/extension/swan/layouts/TileOrientation.js",
	"core/extension/swan/collections/ArrayCollection.js",
	"core/extension/swan/components/CheckBox.js",
	"core/extension/swan/components/EditablText.js",
	"core/extension/swan/components/HSlider.js",
	"core/extension/swan/components/Image.js",
	"core/extension/swan/components/ItemRenderer.js",
	"core/extension/swan/components/List.js",
	"core/extension/swan/components/Panel.js",
	"core/extension/swan/components/ProgressBar.js",
	"core/extension/swan/components/RadioButton.js",
	"core/extension/swan/components/Scroller.js",
	"core/extension/swan/components/TabBar.js",
	"core/extension/swan/components/ToggleSwitch.js",
	"core/extension/swan/components/VSlider.js",
	"core/extension/swan/exml/EXML.js",
	"core/extension/swan/i18n/en_US.js",
	"core/extension/swan/i18n/zh_CN.js",
	"core/extension/swan/layouts/BasicLayout.js",
	"core/extension/swan/layouts/TileLayout.js",
	"core/extension/swan/layouts/VerticalLayout.js",
	"core/extension/swan/utils/MatrixUtil.js",
	"core/egret/text/web/HTML5StageText.js",
	"core/egret/localStorage/web/WebLocalStorage.js",
	"core/egret/external/web/WebExternalInterface.js",
	"core/egret/web/CanvasFactory.js",
	"core/egret/web/EgretWeb.js",
	"core/egret/web/WebBitmapData.js",
	"core/egret/web/WebCapability.js",
	"core/egret/web/WebPlayer.js",
	"core/egret/web/WebTouchHandler.js",
	"core/egret/web/WebXML.js",
	"core/egret/web/HTML5NetContext.js",
	"core/egret/web/WebHideHandler.js",
	"core/egret/web/WebImageLoader.js",
	"core/egret/media/web/Html5Audio.js",
	"core/egret/media/web/QQAudio.js",
	"core/egret/media/web/WebAudio.js",
	"core/egret/web/WebTexture.js",
	"core/egret/web/Html5Capatibility.js"
];