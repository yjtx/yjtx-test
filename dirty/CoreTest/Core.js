var examples = {
    "Base64": ["FromTexture", "FromDisplayObject", "FromCrossUrl", "SaveFromTexture", "SaveFromDisplayObject"],
    "Bitmap": ["Normal", "Delay", "Size", "Zoom", "Scale9Size", "Scale9Zoom", "Scale9ZoomSize", "ClickZoom",
        "Repeat", "RepeatScale", "OffsetAnchor", "OffsetAnchorRun", "Scale9Logo", "ScaleX", "ClickSimpleMore", "ClickCrossMore", "Params",
        "Scale9FromRes", "Scale9FromCreate", "WithVideo", "Scale9Btnbg"],
    "BitmapFillMode": ["Example"],
    "BitmapText": ["Normal", "RESNormal", "NumberAdd", "Width"],
    "BlendMode": ["Erase"],
    "CacheAsBitmap": ["ParentSizeZero", "EmptyBitmap", "Twice", "DelayLoaded"],
    "Container": ["OutSideChildInScreen", "ChildRemove"],
    "DB": ["Normal", "Role", "GirlRun", "Hero", "Effects", "BigFla"],
    "DisplayObject": ["ContentBounds", "GetBounds", "SkewValue"],
    "Empty": ["HelloWorld"],
    "Event": ["StageADDAndREMOVE", "StageRESIZE", "BoyAndGirl", "TouchCapture"],

    "Function": ["Super", "DefaultValue", "RegExp1"],
    "Graphics": ["DrawRectTwice", "DrawRoundRect", "ArcCircleDiff", "DrawEllipse", "LinesDiff", "CurveTo","LineTest", "Guaguale", "Guaguale2", "DrawArc", "DrawLineClick", "DrawArcFill", "DrawArcRun", "LineStyle", "SomeCircles", "WithoutEndFill", "DrawLine", "ArcCircleRun", "DrawCurve"],

    "Loader": ["BinFile", "Bitmap", "Sound", "Text", "PostData", "GetData", "HttpReqeust", "HttpReqeustGet"],
    "Mask": ["MaskRectChanges", "MaskGraphics", "ProgressCircle", "MaskRect", "ScrollRect", "DisplayObject", "CircleGraphics", "ArcCircleRun", "WithShapeMove"],
    "MovieClip": ["Horse", "Normal", "ClickSimpleMore", "ClickCrossMore", "ResAnimation", "NumRun", "Events"],

    "Orientation": ["Normal"],
    "Pixel": ["MovieClip"],
    "RenderTexture": ["Less257", "CopyGrids", "DrawTwo", "BgTween", "RectSize", "Circle", "SpriteWithBitmap", "BitmapWithScale"],
    "RES": ["SheetAsync", "LoadAndDispose", "LoadTwoAndDisposeFirst", "ByUrl", "Async", "DisposeAfterUrl", "DisposeAfterAsync", "DisposeAfterRenderTexture", "RenderTextureDouble", "Loaded", "Sheet",
        "DisposeSheetAfterSheet", "DisposeGroupAfterSheet", "DisposeSubKeyAfterSheet", "LoadedTwice", "LoadTwoConfigs"],
    "Sound": ["Position", "Normal", "ClickLoop", "ClickPlay", "ClickPlayNumbers", "Timeout", "Volume", "AllTest", "CheckStartTime"],
    "ScrollView": ["Normal", "List"],
    "ScaleMode": ["ClickChangeModes", "CenterWithBg", "FixedWidthAndPortrait"],
    "SpriteSheet": ["Diff", "SubKey", "Repeat", "Normal", "DiffOffSet", "WithParams"],
    "Stage":["FrameRate", "RegionPolicy", "ScaleModeAndOrientationMode", "Design"],
    "Texture": ["GetPixel32WithImg", "GetPixel32WithDO"],
    "TextField": ["LineSpacing", "MaxChars", "InputAndArea", "ShowOneByOne", "Normal", "InputNotClick", "StrokeRun", "AppendText", "Background", "Family", "Restrict", "Flow", "FlowRun", "Input", "Input2", "TextArea", "Wrap", "NormalDelay", "Href", "InputText",
        "InputTextWithDisplayAsPasswordAndRestrict", "MiniWidth", "OnFocus", "OnFocusAuto", "InputRotation"],
    "Ticker": ["LoadingUse","AddAndRemove"],
    "Timer": ["LoopUse", "StartStop"],
    "Touch": ["InputAndButton", "Bitmap", "Graphics", "Container", "ReleaseOutSide", "HideClick", "SpriteBitmap", "MultiTouches"],
    "Tween": ["PausePlayWithWait", "RemoveAll", "TwoTween", "SingleOp", "TweensOp", "PauseAndPlay", "Normal", "Rotation", "LoopWithShape", "TreeRunRotation", "TextFieldNumberAdd"],
    "Video": ["Normal"],
    "WebSocket": ["String", "Binary"],
    "XML": ["JsonUse"],
    "Draw": ["DBAndClick", "ClickShowSprites", "MCAndClick"],
    "Other": ["WinTest"],
    "Arc": ["AllUse"],
    "BUGS": ["CacheAsBitmapEmptyContainer", "GraphicsDrawArcOne"]
};

function returnHref(thirdName, forthName) {
    if (thirdName == "BUGS") {
        return "dirty/CoreTest/index.html?mainClass=" + (forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
    }
    return "dirty/CoreTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret_Dirty", "Core", examples, returnHref);
