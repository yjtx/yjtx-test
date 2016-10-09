var examples = {
    "Base64": ["FromTexture", "FromDisplayObject", "FromCrossUrl", "SaveFromTexture", "SaveFromDisplayObject"],
    "Bitmap": ["Normal", "Delay", "Size", "Zoom", "Scale9Size", "Scale9Zoom", "Scale9ZoomSize", "ClickZoom",
        "Repeat", "RepeatScale", "OffsetAnchor", "OffsetAnchorRun", "Scale9Logo", "ScaleX", "ClickSimpleMore", "ClickCrossMore", "Params",
        "Scale9FromRes", "Scale9FromCreate", "Scale9Btnbg", "FillMode"
    ],
    "BitmapText": ["Normal", "RESNormal", "NumberAdd", "Width"],
    "BlendMode": ["Erase"],
    "CacheAsBitmap": ["ParentSizeZero", "EmptyBitmap", "Twice", "DelayLoaded"],
    "Container": ["ChildRemove", "AddRemoved"],
    "DB": ["Normal", "Role", "GirlRun", "Hero", "Effects", "BigFla", "Baozha"],
    "DisplayObject": ["ContentBounds", "GetBounds", "SkewValue"],
    "Empty": ["HelloWorld"],
    "Event": ["StageADDAndREMOVE", "StageRESIZE", "BoyAndGirl", "TouchCapture", "AddedAndRemoved"],

    "Function": ["Super", "DefaultValue", "RegExp1", "Transmit"],
    "Filters": ["Color", 'Glow', 'Blur', 'Shadow'],
    "Graphics": ["AllUse", "LineDDD", "DrawRectTwice", "DrawRectMore", "DrawRoundRect", "ArcCircleDiff", "DrawEllipse", "LinesDiff", "CurveTo", 
        "LineTest", "Guaguale", "GuagualeWithRenderTexture", "DrawArc", "DrawLineClick", "DrawArcFill", "DrawArcRun", "LineStyle", 
        "SomeCircles", "WithoutEndFill", "DrawLine", "ArcCircleRun", "DrawCurve", "GradientFill", "DrawArcLine"],

    "Loader": ["BinFile", "Bitmap", "Sound", "Text", "TextTwice", "PostData", "GetData", "HttpReqeustGet", "HttpReqeustPost"],
    "Mask": ["MaskRectChanges", "MaskGraphics", "ProgressCircle", "MaskRect", "ScrollRect", "DisplayObject", 
        "CircleGraphics", "ArcCircleRun", "WithShapeMove", "WithRotation"],
    "MovieClip": ["Normal", "DaSheng", "ClickSimpleMore", "ClickCrossMore", "NumRun", "Events"],

    "Orientation": ["Normal"],
    "Pixel": ["MovieClip"],
    "RenderTexture": ["WithTextField", "Less257", "CopyGrids", "DrawTwo", "BgTween", "RectSize", "Circle", "SpriteWithBitmap", "BitmapWithScale", "OutSideChildInScreen"],
    "RES": ["SheetAsync", "LoadAndDispose", "LoadTwoAndDisposeFirst", "ByUrl", "Async", "DisposeAfterUrl", "DisposeAfterAsync", "DisposeAfterRenderTexture", "RenderTextureDouble", "Loaded", "Sheet",
        "DisposeSheetAfterSheet", "DisposeGroupAfterSheet", "DisposeSubKeyAfterSheet", "LoadedTwice", "LoadTwoConfigs", "Bin"
    ],
    "Sound": ["Position", "Normal", "ClickLoop", "ClickPlay", "ClickPlayNumbers", "Timeout", "Volume", "AllTest", "CheckStartTime"],
    "ScrollView": ["Double", "Normal", "List"],
    "ScaleMode": ["ClickChangeModes", "CenterWithBg", "FixedWidthAndPortrait"],
    "SpriteSheet": ["Diff", "SubKey", "Repeat", "Normal", "DiffOffSet", "WithParams"],
    "Stage": ["FrameRate", "RegionPolicy", "ScaleModeAndOrientationMode", "Design"],
    "Texture": ["GetPixel32WithImg", "GetPixel32WithDO"],
    "TextField": ["LineSpacing", "MaxChars", "InputAndArea", "ShowOneByOne", "Normal", "InputNotClick", "StrokeRun", "AppendText", "Background", "Family", "Restrict", 
        "Flow", "FlowRun", "FlowEndWithEmpty", "Input", "Input2", "TextArea", "Wrap", "NormalDelay", "Href", "Href2", "InputText",
        "InputTextWithDisplayAsPasswordAndRestrict", "MiniWidth", "OnFocus", "OnFocusAuto", "InputRotation"
    ],
    "Ticker": ["LoadingUse", "AddAndRemove"],
    "Timer": ["LoopUse", "StartStop"],
    "Touch": ["InputAndButton", "Bitmap", "Graphics", "Container", "ReleaseOutSide", "HideClick", "SpriteBitmap", "MultiTouches"],
    "Tween": ["PausePlayWithWait", "RemoveAll", "TwoTween", "SingleOp", "TweensOp", "PauseAndPlay", "Normal", "Rotation", 
        "LoopWithShape", "TreeRunRotation", "TextFieldNumberAdd", "HasMore"],
    "Video": ["Normal", "InBitmap"],
    "WebSocket": ["String", "Binary"],
    "XML": ["JsonUse"],
    "Other": ["WinTest"],
    "BUGS": ["CacheAsBitmapEmptyContainer", "GraphicsDrawArcOne", "XMLParseError", "MaskScaleX"]
};

function returnHref(thirdName, forthName) {
    if (thirdName == "BUGS") {
        return "dirty/CoreTest/index.html?mainClass=" + (forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
    }
    return "dirty/CoreTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret_Dirty", "Core", examples, returnHref);