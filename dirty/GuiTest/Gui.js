var examples = {
    "Button": ["WithInput"],
    "Label": ["Normal", "NormalDelay"],
    "UIAsset": ["WithBitmapText", "ScaleZeroClick", "DynamicSetting", "ExmlSimple"],
    "Main": ["Demo"],
    "Rect": ["CacheAsBitmap", "ExmlSimple"],
    "List": ["Two"],
    "TextInput": ["Normal"]
};

function returnHref(thirdName, forthName) {
    return "dirty/GuiTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret_Dirty", "Gui", examples, returnHref);
