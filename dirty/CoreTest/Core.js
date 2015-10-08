var examples = {
    "Empty": ["HelloWorld"],
    "Function": ["Super", "DefaultValue"],
    "Loader": ["Bitmap", "Sound", "Text", "PostData"],
    "TextField": ["Normal", "AppendText", "Background", "Family", "Restrict", "Flow", "FlowRun", "Input", "TextArea", "Wrap", "NormalDelay", "Href", "InputText"],
    "Sound": ["Normal", "ClickLoop", "ClickPlay", "Timeout", "Volume"],
    "WebSocket": ["String", "Binary"],
    "Base64": ["FromTexture", "FromDisplayObject", "FromCrossUrl", "SaveFromTexture", "SaveFromDisplayObject"],
    "Tween": ["Normal"],
    "Bitmap": ["Normal", "Delay", "Size", "Zoom", "Scale9Size", "Scale9Zoom", "Scale9ZoomSize", "ClickZoom",
        "Repeat", "RepeatScale", "OffsetAnchor", "OffsetAnchorRun", "Scale9Logo", "ScaleX", "ClickSimpleMore", "ClickCrossMore"],
    "CacheAsBitmap": ["ParentSizeZero"],
    "DB": ["Normal", "Role", "GirlRun"],
    "MovieClip": ["Normal", "ClickSimpleMore", "ClickCrossMore"],
    "Event": ["StageADDAndREMOVE", "StageRESIZE"],
    "Touch": ["Bitmap", "Graphics", "Container", "ReleaseOutSide", "HideClick", "SpriteBitmap"],
    "Graphics": ["DrawArc", "LineStyle", "SomeCircles"],
    "Mask": ["MaskRect", "ScrollRect", "DisplayObject", "CircleGraphics"],
    "ScrollView": ["Normal"],
    "BitmapText": ["Normal", "RESNormal"],
    "SpriteSheet": ["Diff", "SubKey", "Repeat"],
    "Texture": ["GetPixel32WithImg", "GetPixel32WithDO"],
    "RenderTexture": ["Less257"],
    "RES": ["ByUrl", "Async", "DisposeAfterUrl", "DisposeAfterAsync", "DisposeAfterRenderTexture", "RenderTextureDouble", "Loaded", "Sheet",
        "DisposeSheetAfterSheet", "DisposeGroupAfterSheet", "DisposeSubKeyAfterSheet"],
    "Ticker": ["LoadingUse"],
    "Orientation": ["Normal"],
    "Video": ["Normal"],
    "DisplayObject": ["ContentBounds"],
    "BlendMode": ["Erase"],
    "BitmapFillMode": ["Example"],
    "": []
};


function returnHref(thirdName, forthName) {
    return "dirty/CoreTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret_Dirty", "Core", examples, returnHref);
