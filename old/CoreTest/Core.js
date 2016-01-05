var examples = {
    "Empty": ["HelloWorld"],
    "Function": ["Super", "DefaultValue"],
    "Loader": ["Bitmap", "Sound", "Text"],
    "DisplayObject": ["ContentBounds", "GetBounds"],
    "TextField": ["Normal", "AppendText", "Background", "Family", "Restrict", "Flow", "Input", "TextArea", "Wrap", "InputRotation"],
    "Sound": ["Normal"],
    "WebSocket": ["String", "Binary"],
    "Base64": ["FromTexture", "FromDisplayObject", "FromCrossUrl", "SaveFromTexture", "SaveFromDisplayObject"],
    "Tween": ["Normal"],
    "Bitmap": ["Normal", "Delay", "Size", "Zoom", "Scale9Size", "Scale9Zoom", "Scale9ZoomSize",
        "Repeat", "RepeatScale", "OffsetAnchor", "OffsetAnchorRun", "Scale9Logo"],
    "CacheAsBitmap": ["ParentSizeZero", "DelayLoaded"],
    "DB": ["Normal", "Role", "GirlRun"],
    "MovieClip": ["Normal"],
    "Event": ["StageADDAndREMOVE", "TouchCapture"],
    "Touch": ["Bitmap", "Graphics", "Container", "GraphicsEvent"],
    "Timer": ["LoopUse", "StartStop"],
    "Graphics": ["LineStyle", "SomeCircles"],
    "Mask": ["MaskRect", "ScrollRect"],
    "ScrollView": ["Normal"],
    "BitmapText": ["Normal", "RESNormal"],
    "SpriteSheet": ["Diff", "SubKey"],
    "Stage":["FrameRate"],
    "Texture": ["GetPixel32WithImg", "GetPixel32WithDO"],
    "RES": ["LoadAndDispose", "ByUrl", "Async", "DisposeAfterUrl", "DisposeAfterAsync"],
    "Ticker": ["LoadingUse"],
    "Other": ["WinTest"],
    "": []
};

function returnHref(thirdName, forthName) {
    return "old/CoreTest/launcher/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret", "Egret", examples, returnHref);
