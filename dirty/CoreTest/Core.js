var examples = {
    "Base64": ["FromTexture", "FromDisplayObject", "FromCrossUrl", "SaveFromTexture", "SaveFromDisplayObject"],
    "Bitmap": ["Normal", "Delay", "Size", "Zoom", "Scale9Size", "Scale9Zoom", "Scale9ZoomSize", "ClickZoom",
        "Repeat", "RepeatScale", "OffsetAnchor", "OffsetAnchorRun", "Scale9Logo", "ScaleX", "ClickSimpleMore", "ClickCrossMore", "Params",
        "Scale9FromRes", "Scale9FromCreate"],
    "BitmapFillMode": ["Example"],
    "BitmapText": ["Normal", "RESNormal"],
    "BlendMode": ["Erase"],
    "CacheAsBitmap": ["ParentSizeZero", "EmptyBitmap", "Twice"],
    "Container": ["OutSideChildInScreen"],
    "DB": ["Normal", "Role", "GirlRun"],
    "DisplayObject": ["ContentBounds", "GetBounds"],
    "Empty": ["HelloWorld"],
    "Event": ["StageADDAndREMOVE", "StageRESIZE"],

    "Function": ["Super", "DefaultValue"],
    "Graphics": ["DrawArc", "DrawArcFill", "DrawArcRun", "LineStyle", "SomeCircles", "WithoutEndFill", "DrawLine", "ArcCircleRun", "DrawCurve"],

    "Loader": ["Bitmap", "Sound", "Text", "PostData"],
    "Mask": ["MaskRect", "ScrollRect", "DisplayObject", "CircleGraphics", "ArcCircleRun"],
    "MovieClip": ["Normal", "ClickSimpleMore", "ClickCrossMore", "ResAnimation"],

    "TextField": ["Normal", "AppendText", "Background", "Family", "Restrict", "Flow", "FlowRun", "Input", "TextArea", "Wrap", "NormalDelay", "Href", "InputText"],
    "Sound": ["Normal", "ClickLoop", "ClickPlay", "ClickPlayNumbers", "Timeout", "Volume"],
    "WebSocket": ["String", "Binary"],
    "Tween": ["Normal", "Rotation"],
    "Touch": ["Bitmap", "Graphics", "Container", "ReleaseOutSide", "HideClick", "SpriteBitmap"],
    "ScrollView": ["Normal"],
    "SpriteSheet": ["Diff", "SubKey", "Repeat"],
    "Texture": ["GetPixel32WithImg", "GetPixel32WithDO"],
    "RenderTexture": ["Less257", "CopyGrids", "DrawTwo", "BgTween"],
    "RES": ["ByUrl", "Async", "DisposeAfterUrl", "DisposeAfterAsync", "DisposeAfterRenderTexture", "RenderTextureDouble", "Loaded", "Sheet",
        "DisposeSheetAfterSheet", "DisposeGroupAfterSheet", "DisposeSubKeyAfterSheet"],
    "Ticker": ["LoadingUse"],
    "Orientation": ["Normal"],
    "Video": ["Normal"],
    "Timer": ["LoopUse"],
    "XML": ["JsonUse"],
    "": []
};


function returnHref(thirdName, forthName) {
    return "dirty/CoreTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret_Dirty", "Core", examples, returnHref);
