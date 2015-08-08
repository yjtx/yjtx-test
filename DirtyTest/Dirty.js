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

var item1 = document.getElementById("egret");
if (!item1) {
    var items_ul = document.getElementById("items_ul");
    var item1 = getItem1("Egret");
    item1.id = "egret";
}

items_ul.appendChild(item1);

var item2 = getItem2("Dirty");
item1.lastChild.appendChild(item2);

for (key in examples) {
    if (key == "") {
        continue;
    }
    var item3 = getItem3(key);
    item2.lastChild.appendChild(item3);

    var contents = examples[key];
    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        var href = "DirtyTest/index.html?mainClass=" + (key + content) + "&factor=" + input_size.value;

        var item4 = getItem4(content, href);
        item3.lastChild.appendChild(item4);
    }
}