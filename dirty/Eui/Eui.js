var examples = {
    "Button": ["WithInput"],
    "Function": ["DivSetterAndGetter"],
    "Rect": ["ExmlSimple"],
    "Image": ["Normal", "ExmlIn", "ExmlOut"],
    "Scroller": ["ExmlIn"]
};

function returnHref(thirdName, forthName) {
    if (thirdName.indexOf("examples") < 0) {
        return "dirty/Eui/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
    }
    else {
        return "dirty/Eui/index.html?mainClass=" + (forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
    }
}

createRoot("Egret_Dirty", "Eui2", examples, returnHref);
