var examples = {
    "Empty": ["HelloWorld"],
    "Function": ["Super", "DefaultValue"],
    "Loader": ["Bitmap", "Sound", "Text"],
    "TextField": ["Normal", "AppendText", "Background", "Flow", "Input", "Wrap"],
    "Sound": ["Normal"],
    "WebSocket": ["String", "Binary"],
    "Base64": ["FromTexture", "FromDisplayObject", "FromCrossUrl", "SaveFromTexture", "SaveFromDisplayObject"],
    "Tween": ["Normal"],
    "Bitmap": ["Normal", "Delay", "Size", "Zoom", "Scale9Size", "Scale9Zoom", "Scale9ZoomSize",
        "Repeat", "RepeatScale", "OffsetAnchor", "OffsetAnchorRun", "Scale9Logo"],
    "CacheAsBitmap": ["ParentSizeZero"],
    "DB": ["Normal", "Role"],
    "MovieClip": ["Normal"],
    "Event": ["StageADDAndREMOVE"],
    "Touch": ["Bitmap", "Graphics", "Container"],
    "Graphics": ["DrawArc"],
    "Mask": ["MaskRect", "ScrollRect", "DisplayObject", "CircleGraphics"],
    "ScrollView": ["Normal"],
    "BitmapText": ["Normal", "RESNormal"],
    "SpriteSheet": ["Diff"],
    "RES": ["ByUrl", "Async"],
    "": []
};


function returnHref(thirdName, forthName) {
    return "DirtyTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value;
}

createRoot("Egret", "Dirty", examples, returnHref);
