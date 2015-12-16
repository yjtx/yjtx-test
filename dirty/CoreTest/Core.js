var examples = {
    "Base64": ["FromTexture", "FromDisplayObject", "FromCrossUrl", "SaveFromTexture", "SaveFromDisplayObject"],
    "Bitmap": ["Normal", "Delay", "Size", "Zoom", "Scale9Size", "Scale9Zoom", "Scale9ZoomSize", "ClickZoom",
        "Repeat", "RepeatScale", "OffsetAnchor", "OffsetAnchorRun", "Scale9Logo", "ScaleX", "ClickSimpleMore", "ClickCrossMore", "Params",
        "Scale9FromRes", "Scale9FromCreate", "WithVideo"],
    "BitmapFillMode": ["Example"],
    "BitmapText": ["Normal", "RESNormal", "NumberAdd"],
    "BlendMode": ["Erase"],
    "CacheAsBitmap": ["ParentSizeZero", "EmptyBitmap", "Twice", "DelayLoaded"],
    "Container": ["OutSideChildInScreen", "ChildRemove"],
    "DB": ["Normal", "Role", "GirlRun", "Hero", "Effects"],
    "DisplayObject": ["ContentBounds", "GetBounds", "SkewValue"],
    "Empty": ["HelloWorld"],
    "Event": ["StageADDAndREMOVE", "StageRESIZE", "BoyAndGirl", "TouchCapture"],

    "Function": ["Super", "DefaultValue", "RegExp1"],
    "Graphics": ["ArcCircleDiff", "DrawEllipse", "LinesDiff", "CurveTo","LineTest", "Guaguale", "Guaguale2", "DrawArc", "DrawLineClick", "DrawArcFill", "DrawArcRun", "LineStyle", "SomeCircles", "WithoutEndFill", "DrawLine", "ArcCircleRun", "DrawCurve"],

    "Loader": ["BinFile", "Bitmap", "Sound", "Text", "PostData", "GetData"],
    "Mask": ["ProgressCircle", "MaskRect", "ScrollRect", "DisplayObject", "CircleGraphics", "ArcCircleRun", "WithShapeMove"],
    "MovieClip": ["Normal", "ClickSimpleMore", "ClickCrossMore", "ResAnimation", "NumRun", "Events"],

    "Orientation": ["Normal"],
    "RenderTexture": ["Less257", "CopyGrids", "DrawTwo", "BgTween", "RectSize", "Circle", "SpriteWithBitmap", "BitmapWithScale"],
    "RES": ["LoadTwoAndDisposeFirst", "ByUrl", "Async", "DisposeAfterUrl", "DisposeAfterAsync", "DisposeAfterRenderTexture", "RenderTextureDouble", "Loaded", "Sheet",
        "DisposeSheetAfterSheet", "DisposeGroupAfterSheet", "DisposeSubKeyAfterSheet", "LoadedTwice"],
    "Sound": ["Normal", "ClickLoop", "ClickPlay", "ClickPlayNumbers", "Timeout", "Volume", "AllTest", "CheckStartTime"],
    "ScrollView": ["Normal", "List"],
    "ScaleMode": ["ClickChangeModes", "CenterWithBg", "FixedWidthAndPortrait"],
    "SpriteSheet": ["Diff", "SubKey", "Repeat", "Normal", "DiffOffSet"],
    "Stage":["FrameRate", "RegionPolicy"],
    "Texture": ["GetPixel32WithImg", "GetPixel32WithDO"],
    "TextField": ["MaxChars", "InputAndArea", "ShowOneByOne", "Normal", "InputNotClick", "StrokeRun", "AppendText", "Background", "Family", "Restrict", "Flow", "FlowRun", "Input", "TextArea", "Wrap", "NormalDelay", "Href", "InputText"],
    "Ticker": ["LoadingUse"],
    "Timer": ["LoopUse", "StartStop"],
    "Touch": ["InputAndButton", "Bitmap", "Graphics", "Container", "ReleaseOutSide", "HideClick", "SpriteBitmap", "MultiTouches"],
    "Tween": ["Normal", "Rotation", "LoopWithShape", "TreeRunRotation"],
    "Video": ["Normal"],
    "WebSocket": ["String", "Binary"],
    "XML": ["JsonUse"],
    "Draw": ["DBAndClick", "ClickShowSprites", "MCAndClick"],
    "Other": ["WinTest"],
    "Arc": ["AllUse"],
    "": []
};


function returnHref(thirdName, forthName) {
    return "dirty/CoreTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret_Dirty", "Core", examples, returnHref);
