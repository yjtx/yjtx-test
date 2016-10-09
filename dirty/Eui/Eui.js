var examples = {
    "Button": ["WithInput", "WithFilters"],
    "EditText": ["LineSpacing"],
    "Function": ["DivSetterAndGetter"],
    "Image": ["Normal", "ExmlIn", "ExmlOut", "ExmlPosition"],
    "List": ["Tile"],
    "Panel": ["WithButton"],
    "Rect": ["ExmlSimple"],
    "Scroller": ["ExmlIn", "WithBitmap", "ExmlOut"],
    "Skin": ["Button"],
    "TextInput": ["WithEXML"]
};

function returnHref(thirdName, forthName) {
    if (thirdName.indexOf("examples") < 0) {
        return "dirty/Eui/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
    } else {
        return "dirty/Eui/index.html?mainClass=" + (forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
    }
}

createRoot("Egret_Dirty", "Eui2", examples, returnHref);