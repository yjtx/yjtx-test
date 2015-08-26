var examples = {
    "Empty": ["HelloWorld"],
    "Function": ["Super", "DefaultValue"],
    "Loader": ["Bitmap", "Sound", "Text"],
    "TextField": ["Normal", "AppendText", "Background", "Family", "Restrict", "Flow", "Input", "TextArea", "Wrap", "NormalDelay", "Href"],
    "Sound": ["Normal", "ClickLoop", "ClickPlay", "Timeout", "Volume"],
    "WebSocket": ["String", "Binary"],
    "Base64": ["FromTexture", "FromDisplayObject", "FromCrossUrl", "SaveFromTexture", "SaveFromDisplayObject"],
    "Tween": ["Normal"],
    "Bitmap": ["Normal", "Delay", "Size", "Zoom", "Scale9Size", "Scale9Zoom", "Scale9ZoomSize", "ClickZoom",
        "Repeat", "RepeatScale", "OffsetAnchor", "OffsetAnchorRun", "Scale9Logo", "ScaleX", "ClickSimpleMore", "ClickCrossMore"],
    "CacheAsBitmap": ["ParentSizeZero"],
    "DB": ["Normal", "Role"],
    "MovieClip": ["Normal", "ClickSimpleMore", "ClickCrossMore"],
    "Event": ["StageADDAndREMOVE"],
    "Touch": ["Bitmap", "Graphics", "Container", "ReleaseOutSide", "HideClick"],
    "Graphics": ["DrawArc"],
    "Mask": ["MaskRect", "ScrollRect", "DisplayObject", "CircleGraphics"],
    "ScrollView": ["Normal"],
    "BitmapText": ["Normal", "RESNormal"],
    "SpriteSheet": ["Diff", "SubKey"],
    "Texture": ["GetPixel32WithImg", "GetPixel32WithDO"],
    "RES": ["ByUrl", "Async", "DisposeAfterUrl", "DisposeAfterAsync", "DisposeAfterRenderTexture", "RenderTextureDouble", "Loaded"],
    "Ticker": ["LoadingUse"],
    "": []
};


function returnHref(thirdName, forthName) {
    return "DirtyTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret", "Dirty", examples, returnHref);
