var examples = {
    "Base64": ["FromTexture", "FromDisplayObject", "FromCrossUrl", "SaveFromTexture", "SaveFromDisplayObject"],
    "Bitmap": ["Normal", "Delay", "Size", "Zoom", "Scale9Size", "Scale9Zoom", "Scale9ZoomSize", "ClickZoom",
        "Repeat", "RepeatScale", "OffsetAnchor", "OffsetAnchorRun", "Scale9Logo", "ScaleX", "ClickSimpleMore", "ClickCrossMore", "Params",
        "Scale9FromRes", "Scale9FromCreate"],
    "BitmapFillMode": ["Example"],
    "BitmapText": ["Normal", "RESNormal", "NumberAdd"],
    "BlendMode": ["Erase"],
    "CacheAsBitmap": ["ParentSizeZero", "EmptyBitmap", "Twice", "DelayLoaded"],
    "Container": ["OutSideChildInScreen", "ChildRemove"],
    "DB": ["Normal", "Role", "GirlRun", "Hero"],
    "DisplayObject": ["ContentBounds", "GetBounds", "SkewValue"],
    "Empty": ["HelloWorld"],
    "Event": ["StageADDAndREMOVE", "StageRESIZE"],

    "Function": ["Super", "DefaultValue"],
    "Graphics": ["CurveTo","LineTest", "Guaguale", "Guaguale2", "DrawArc", "DrawLineClick", "DrawArcFill", "DrawArcRun", "LineStyle", "SomeCircles", "WithoutEndFill", "DrawLine", "ArcCircleRun", "DrawCurve"],

    "Loader": ["Bitmap", "Sound", "Text", "PostData", "GetData"],
    "Mask": ["ProgressCircle", "MaskRect", "ScrollRect", "DisplayObject", "CircleGraphics", "ArcCircleRun"],
    "MovieClip": ["Normal", "ClickSimpleMore", "ClickCrossMore", "ResAnimation", "NumRun"],

    "Orientation": ["Normal"],
    "RenderTexture": ["Less257", "CopyGrids", "DrawTwo", "BgTween", "RectSize", "Circle", "SpriteWithBitmap", "BitmapWithScale"],
    "RES": ["ByUrl", "Async", "DisposeAfterUrl", "DisposeAfterAsync", "DisposeAfterRenderTexture", "RenderTextureDouble", "Loaded", "Sheet",
        "DisposeSheetAfterSheet", "DisposeGroupAfterSheet", "DisposeSubKeyAfterSheet", "LoadedTwice"],
    "Sound": ["Normal", "ClickLoop", "ClickPlay", "ClickPlayNumbers", "Timeout", "Volume", "AllTest", "CheckStartTime"],
    "ScrollView": ["Normal", "List"],
    "ScaleMode": ["CenterWithBg", "FixedWidthAndPortrait"],
    "SpriteSheet": ["Diff", "SubKey", "Repeat", "Normal"],
    "Texture": ["GetPixel32WithImg", "GetPixel32WithDO"],
    "TextField": ["Normal", "InputNotClick", "StrokeRun", "AppendText", "Background", "Family", "Restrict", "Flow", "FlowRun", "Input", "TextArea", "Wrap", "NormalDelay", "Href", "InputText"],
    "Ticker": ["LoadingUse"],
    "Timer": ["LoopUse", "StartStop"],
    "Touch": ["Bitmap", "Graphics", "Container", "ReleaseOutSide", "HideClick", "SpriteBitmap", "MultiTouches"],
    "Tween": ["Normal", "Rotation", "LoopWithShape"],
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
