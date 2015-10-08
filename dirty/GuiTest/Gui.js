var examples = {
    "Label": ["Normal", "NormalDelay"],
    "Main": ["Demo"]
};

function returnHref(thirdName, forthName) {
    return "dirty/GuiTest/index.html?mainClass=" + (thirdName + forthName) + "&factor=" + input_size.value + "&r=" + Math.random();
}

createRoot("Egret_Dirty", "Gui", examples, returnHref);
