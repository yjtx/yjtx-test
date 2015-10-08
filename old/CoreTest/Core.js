var examples = {
    "Empty": ["HelloWorld"],
    "Function": ["Super", "DefaultValue"],
    "Loader": ["Bitmap", "Sound", "Text"],
    "TextField": ["Normal", "AppendText", "Background", "Family", "Restrict", "Flow", "Input", "TextArea", "Wrap", "InputRotation"],
    "Sound": ["Normal"],
    "WebSocket": ["String", "Binary"],
    "Base64": ["FromTexture", "FromDisplayObject", "FromCrossUrl", "SaveFromTexture", "SaveFromDisplayObject"],
    "Tween": ["Normal"],
    "Bitmap": ["Normal", "Delay", "Size", "Zoom", "Scale9Size", "Scale9Zoom", "Scale9ZoomSize",
        "Repeat", "RepeatScale", "OffsetAnchor", "OffsetAnchorRun", "Scale9Logo"],
    "CacheAsBitmap": ["ParentSizeZero"],
    "DB": ["Normal", "Role", "GirlRun"],
    "MovieClip": ["Normal"],
    "Event": ["StageADDAndREMOVE"],
    "Touch": ["Bitmap", "Graphics", "Container", "GraphicsEvent"],
    "Graphics": ["LineStyle", "SomeCircles"],
    "Mask": ["MaskRect", "ScrollRect"],
    "ScrollView": ["Normal"],
    "BitmapText": ["Normal", "RESNormal"],
    "SpriteSheet": ["Diff", "SubKey"],
    "Texture": ["GetPixel32WithImg", "GetPixel32WithDO"],
    "RES": ["ByUrl", "Async", "DisposeAfterUrl", "DisposeAfterAsync"],
    "": []
};

function returnHref(thirdName, forthName) {
    return "old/CoreTest/launcher/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret", "Egret", examples, returnHref);